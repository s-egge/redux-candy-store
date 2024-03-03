import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

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
        (product) => product.id === action.payload.id
      )
      if (!inventory) {
        state.push(action.payload)
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
  },
})

export default inventorySlice.reducer
export const selectInventory = inventorySlice.selectSlice
export const { addInventory } = inventorySlice.actions
