import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { selectCart } from "../redux/cartSlice"

export default function Cart() {
  const theme = useTheme()
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const styles = css`
    color: ${theme.text};
    margin: 10px;
    padding: 10px;
    width: 250px;
    background-color: ${theme.lightPurple};
    border-radius: 10px;
  `
  return (
    <div css={styles}>
      <h1>Cart</h1>
      {cart &&
        cart.map((product) => (
          <p key={product.id}>{JSON.stringify(product)}</p>
        ))}
    </div>
  )
}
