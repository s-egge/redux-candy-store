import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    toggleTheme(state) {
      return !state
    },
  },
})

export default themeSlice.reducer
export const selectTheme = (state) => state.theme
export const { toggleTheme } = themeSlice.actions
export const themeMode = (state) => state.theme
