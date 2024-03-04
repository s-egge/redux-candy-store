import { createSlice } from "@reduxjs/toolkit"
import { reduceInventory } from "./inventorySlice"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    distinctItems: 0,
    visible: true,
  },
  reducers: {
    emptyCart(state) {
      state.items = []
      state.distinctItems = 0
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id)
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      state.distinctItems--
    },
    toggleCartView(state) {
      state.visible = !state.visible
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reduceInventory, (state, action) => {
      console.log("In adding to cart extra reducer: ", action.payload)
      const item = state.items.find(
        (item) => item.id === action.payload.item.id
      )
      //if item exists, add quantity
      if (item) {
        item.quantity += action.payload.quantity
        //otherwise, create new item to put into cart
      } else {
        // destructure inStock from item object, add quantity
        const { inStock, ...rest } = action.payload.item
        const newItem = {
          ...rest,
          quantity: action.payload.quantity,
        }
        //add to cart
        state.items.push(newItem)
        state.distinctItems++
      }
    })
  },
})

export default cartSlice.reducer
export const selectCart = (state) => state.cart.items
export const { emptyCart, removeItem, toggleCartView } = cartSlice.actions
export const distinctItems = (state) => state.cart.distinctItems
export const cartVisible = (state) => state.cart.visible
