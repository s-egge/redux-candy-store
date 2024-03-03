import { configureStore } from "@reduxjs/toolkit"
import inventoryReducer from "./inventorySlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
  },
})

store.subscribe(() => {
  console.log("store: ", store.getState())
})

export default store
