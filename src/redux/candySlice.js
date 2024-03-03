import { createSlice } from "@reduxjs/toolkit"

const candySlice = createSlice({
  name: "candy",
  initialState: [],
  reducers: {
    addCandy(state, action) {
      const candy = state.find((c) => c.id === action.payload.id)
      if (!candy) {
        console.log("Adding new candy:", action.payload)
        state.push(action.payload)
      }
      console.log("Candy already exists:", action.payload)
    },
  },
})

export default candySlice.reducer
export const selectCandies = candySlice.selectSlice
export const { addCandy } = candySlice.actions
