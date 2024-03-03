import { configureStore } from "@reduxjs/toolkit"
import candyReducer from "./candySlice"

const store = configureStore({
  reducer: {
    candy: candyReducer,
  },
})

store.subscribe(() => {
  console.log("store: ", store.getState())
})

export default store
