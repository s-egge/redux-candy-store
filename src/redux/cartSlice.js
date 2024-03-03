import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    distinctProducts: 0,
    visible: true,
  },
  reducers: {
    // add a new item to cart or increase quantity of existing item in cart
    addToCart(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      )
      //if the product doesn't exist, add it and increment number of distinct proucts
      if (!product) {
        state.products.push(action.payload)
        state.distinctProducts++

        //if it does exist, add the quantity
      } else {
        product.quantity += action.payload.quantity
      }
    },
    toggleCartView(state) {
      state.visible = !state.visible
    },
  },
})

export default cartSlice.reducer
export const selectCart = (state) => state.cart.products
export const { addToCart, toggleCartView } = cartSlice.actions
export const distinctProducts = (state) => state.cart.distinctProducts
export const cartVisible = (state) => state.cart.visible
