import { createSlice } from "@reduxjs/toolkit"
import { reduceInventory } from "./inventorySlice"

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
      console.log("action recieved by cart: ", action)
      console.log("current state: ", state)
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
  extraReducers: (builder) => {
    builder.addCase(reduceInventory, (state, action) => {
      console.log("In adding to cart extra reducer: ", action.payload)
      const product = state.products.find(
        (product) => product.id === action.payload.candy.id
      )
      //if product exists, add quantity
      if (product) {
        product.quantity += action.payload.quantity
        //otherwise, create new product to put into cart
      } else {
        // destructure inStock from candy object, add quantity
        const { inStock, ...rest } = action.payload.candy
        const newCandy = {
          ...rest,
          quantity: action.payload.quantity,
        }
        //add to cart
        state.products.push(newCandy)
      }
    })
  },
})

export default cartSlice.reducer
export const selectCart = (state) => state.cart.products
export const { addToCart, toggleCartView } = cartSlice.actions
export const distinctProducts = (state) => state.cart.distinctProducts
export const cartVisible = (state) => state.cart.visible
