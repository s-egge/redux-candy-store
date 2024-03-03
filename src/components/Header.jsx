import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { distinctProducts } from "../redux/cartSlice"
import { toggleCartView } from "../redux/cartSlice"
import ThemeToggle from "./ThemeToggle"

import cartSVG from "../assets/cart.svg"

export default function Header() {
  const theme = useTheme()
  const cartCount = useSelector(distinctProducts)
  const dispatch = useDispatch()

  const styles = css`
    background-color: ${theme.purple};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    button {
      position: relative;
      border-radius: 25%;
      padding: 5px;
      background-color: #7f7ffc;
      border: none;
      cursor: pointer;
      color: inherit;
    }

    button:hover {
      background-color: #a8a8ff;
      transform: scale(1.1);
    }

    .cartTotal {
      position: absolute;
      bottom: -5px;
      right: -5px;
      background-color: #3c5bc2;
      border-radius: 50%;
      color: white;
      width: 15px;
      height: 15px;
      padding: 5px;
    }
  `

  return (
    <div css={styles}>
      <h1>Penny Candy Store</h1>
      <ThemeToggle />
      <button onClick={() => dispatch(toggleCartView())}>
        <img src={cartSVG} alt="cart" />
        <p className="cartTotal">{cartCount}</p>
      </button>
    </div>
  )
}
