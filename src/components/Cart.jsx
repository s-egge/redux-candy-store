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
    background-color: ${theme.backgroundColor};
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.primaryHighlight};
    border-radius: 10px;
    height: fit-content;

    .cartTotalContainer {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    button {
      padding: 3px 6px;
      border-radius: 5px;
      background-color: ${theme.primaryHighlight};
      color: ${theme.text};
      box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.1);
    }

    button:hover {
      transform: scale(1.05);
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
