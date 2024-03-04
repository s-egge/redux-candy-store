import Inventory from "./components/Inventory"
import Header from "./components/Header"
import Cart from "./components/Cart"
import { ThemeProvider, css } from "@emotion/react"
import { useSelector } from "react-redux"
import { cartVisible } from "./redux/cartSlice"
import { themeMode } from "./redux/themeSlice"

const theme = {
  light: {
    text: "#000000",
    grey: "#a9a9a9",

    header: "#72b791",
    headerHighlight: "#84c9a3",
    backgroundColor: "#f4f3f0",
    primaryColor: "#ffffff",
    primaryHighlight: "#f4f3f0",
  },

  dark: {
    text: "#ffffff",
    grey: "#7f7f7f",

    header: "#121416",
    headerHighlight: "#1d2125",
    backgroundColor: "#1d2125",
    primaryColor: "#323940",
    primaryHighlight: "#2d333b",
  },
}

export default function App() {
  const darkMode = useSelector(themeMode)
  const cartIsVisible = useSelector(cartVisible)

  const styles = css`
    display: flex;
    height: calc(100vh - 78px);
    overflow: auto;
    background-color: ${darkMode
      ? theme.dark.backgroundColor
      : theme.light.backgroundColor};
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
