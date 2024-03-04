import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { distinctItems } from "../redux/cartSlice"
import { toggleCartView } from "../redux/cartSlice"
import ThemeToggle from "./ThemeToggle"
import cartSVG from "../assets/CartSVG"
import CartSVG from "../assets/CartSVG"

export default function Header() {
  const theme = useTheme()
  const cartCount = useSelector(distinctItems)
  const dispatch = useDispatch()

  const styles = css`
    color: ${theme.text};
    background-color: ${theme.purple};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    button {
      position: relative;
      border-radius: 25%;
      padding: 5px;
      background-color: ${theme.purple};
      border: none;
      cursor: pointer;
      color: inherit;
    }

    button:hover {
      background-color: ${theme.lightPurple};
      transform: scale(1.1);
    }

    .cartTotal {
      position: absolute;
      bottom: -5px;
      right: -5px;
      background-color: ${theme.blue};
      border-radius: 50%;
      color: ${theme.text};
      width: 15px;
      height: 15px;
      padding: 5px;
    }

    .icon-tabler {
      stroke: ${theme.text};
    }
  `

  return (
    <div css={styles}>
      <h1>Penny Candy Store</h1>
      <ThemeToggle />
      <button onClick={() => dispatch(toggleCartView())}>
        <CartSVG />
        <p className="cartTotal">{cartCount}</p>
      </button>
    </div>
  )
}
