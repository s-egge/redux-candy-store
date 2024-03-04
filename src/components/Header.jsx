import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { distinctItems } from "../redux/cartSlice"
import { toggleCartView } from "../redux/cartSlice"
import ThemeToggle from "./ThemeToggle"
import CartSVG from "../assets/CartSVG"

export default function Header() {
  const theme = useTheme()
  const cartCount = useSelector(distinctItems)
  const dispatch = useDispatch()

  const styles = css`
    color: ${theme.text};
    background-color: ${theme.header};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    button {
      position: relative;
      border-radius: 25%;
      padding: 5px;
      background-color: ${theme.header};
      border: none;
      cursor: pointer;
      color: inherit;
    }

    button:hover {
      background-color: ${theme.headerHighlight};
      transform: scale(1.1);
    }

    .cartTotal {
      position: absolute;
      bottom: -5px;
      right: -5px;
      background-color: ${theme.backgroundColor};
      border-radius: 50%;
      color: ${theme.text};
      width: 15px;
      height: 15px;
      padding: 5px;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
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
