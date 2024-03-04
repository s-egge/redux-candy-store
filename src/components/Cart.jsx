import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { selectCart } from "../redux/cartSlice"
import CartItem from "./CartItem"

export default function Cart() {
  const theme = useTheme()
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const styles = css`
    color: ${theme.text};
    margin: 10px;
    padding: 10px;
    width: 25%;
    background-color: ${theme.purple};
    border-radius: 10px;
    height: fit-content;
  `

  const checkOut = () => {
    alert("Thank you for your purchase!")
  }

  return (
    <div css={styles}>
      <h1>Cart</h1>
      {cart && cart.map((item) => <CartItem key={item.id} item={item} />)}
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.length > 0 && <button onClick={checkOut}>Check Out</button>}
    </div>
  )
}
