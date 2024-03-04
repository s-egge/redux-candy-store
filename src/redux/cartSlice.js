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
    // add a new item to cart or increase quantity of existing item in cart
    addToCart(state, action) {
      console.log("action recieved by cart: ", action)
      console.log("current state: ", state)
      const item = state.items.find((item) => item.id === action.payload.id)
      //if the item doesn't exist, add it and increment number of distinct proucts
      if (!item) {
        state.items.push(action.payload)
        state.distinctItems++

        //if it does exist, add the quantity
      } else {
        item.quantity += action.payload.quantity
      }
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
export const { addToCart, toggleCartView } = cartSlice.actions
export const distinctItems = (state) => state.cart.distinctItems
export const cartVisible = (state) => state.cart.visible
