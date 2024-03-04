import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { removeItem } from "./cartSlice"

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async () => {
    const abortController = new AbortController()
    const response = await fetch("/products.json", {
      signal: abortController.signal,
    })
    if (response.status != 200) {
      abortController.abort()
      return thunkAPI.rejectWithValue("Failed to fetch inventory")
    }
    const data = await response.json()
    console.log("data", data)
    return data
  }
)

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    entities: [],
    loading: "idle",
    error: null,
  },
  reducers: {
    addInventory(state, action) {
      const inventory = state.entities.find(
        (item) => item.id === action.payload.id
      )
      if (!inventory) {
        state.entities.push(action.payload)
      } else {
        inventory.inStock += action.payload.inStock
      }
    },
    reduceInventory(state, action) {
      console.log("In reduce inventory: ", action.payload)
      const item = state.entities.find(
        (item) => item.id === action.payload.item.id
      )
      if (item) {
        console.log("reducing inventory: ")
        item.inStock -= action.payload.quantity
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = "idle"
        state.entities = action.payload
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = "idle"
        state.error = action.error.message
      })
      .addCase(removeItem, (state, action) => {
        const item = state.entities.find(
          (item) => item.id === action.payload.id
        )
        if (item) {
          item.inStock += action.payload.quantity
        }
      })
  },
})

export default inventorySlice.reducer
export const selectInventory = inventorySlice.selectSlice
export const { addInventory, reduceInventory } = inventorySlice.actions
