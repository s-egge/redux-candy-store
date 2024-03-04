import { configureStore } from "@reduxjs/toolkit"
import inventoryReducer from "./inventorySlice"
import cartReducer from "./cartSlice"
import themeReducer from "./themeSlice"

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
})

/*
store.subscribe(() => {
  console.log("store: ", store.getState())
}) */

export default store
