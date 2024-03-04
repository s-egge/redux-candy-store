import Inventory from "./components/Inventory"
import Header from "./components/Header"
import Cart from "./components/Cart"
import { ThemeProvider, css } from "@emotion/react"
import { useSelector } from "react-redux"
import { cartVisible } from "./redux/cartSlice"
import { themeMode } from "./redux/themeSlice"

const theme = {
  light: {
    purple: "#dfdae8",
    lightPurple: "#eae5f3",
    blue: "#acc7d4",
    darkGreen: "#bfdad1",
    lightGreen: "#cee5d8",
    creamGrey: "#f4f3f0",
    text: "#000000",
    grey: "#7f7f7f",
  },

  dark: {
    purple: "#403847",
    lightPurple: "#5b5164",
    blue: "#467b89",
    darkGreen: "#4a6d62",
    lightGreen: "#547d6c",
    creamGrey: "#292827",
    text: "#ffffff",
    grey: "#7f7f7f",
  },
}

export default function App() {
  const darkMode = useSelector(themeMode)
  const cartIsVisible = useSelector(cartVisible)

  const styles = css`
    display: flex;
    background-color: ${darkMode
      ? theme.dark.creamGrey
      : theme.light.creamGrey};
  `

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Header />
      <div css={styles}>
        <Inventory />
        {cartIsVisible && <Cart />}
      </div>
    </ThemeProvider>
  )
}
