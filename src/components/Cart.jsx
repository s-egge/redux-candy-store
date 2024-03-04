import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { selectCart, emptyCart } from "../redux/cartSlice"
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

    .cartTotalContainer {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  `

  const checkOut = () => {
    alert("Thank you for your purchase!")
    dispatch(emptyCart())
  }

  return (
    <div css={styles}>
      <h1>Cart</h1>
      {cart && cart.map((item) => <CartItem key={item.id} item={item} />)}
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.length > 0 && (
        <div className="cartTotalContainer">
          <button onClick={checkOut}>Check Out</button>
          <p>
            Cart Total: $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}
