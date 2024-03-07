import { css, useTheme } from "@emotion/react"
import DeleteSVG from "../assets/DeleteSVG"
import { useDispatch } from "react-redux"
import { removeItem } from "../redux/cartSlice"

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const theme = useTheme()
  const price = item.price.toFixed(2)
  const total = (item.price * item.quantity).toFixed(2)

  const styles = css`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    margin: 5px;
    color: ${theme.text};
    background-color: ${theme.primaryColor};
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .imgContainer {
      width: 60px;
      height: 60px;
      padding: 10px;
      background-color: white;
      border-radius: 10%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
        object-fit: contain;
      }
    }

    .itemDetailsContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
      flex-grow: 1;
    }

    .icon {
      cursor: pointer;
      stroke: ${theme.text};
      width: 20px;
      height: 20px;
    }

    button {
      align-self: flex-end;
      padding: 5px;
      border-radius: 5px;
      background-color: ${theme.primaryColor};
      color: ${theme.text};
      border: none;
      cursor: pointer;
      height: fit-content;
      width: fit-content;
    }

    button:hover {
      transform: scale(1.1);
    }
  `

  return (
    <div css={styles}>
      <div className="imgContainer">
        <img src={item.photoUrl} alt={item.name} />
      </div>
      <div className="itemDetailsContainer">
        <h4>{item.name}</h4>
        <p>${price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${total}</p>
      </div>
      <button onClick={() => dispatch(removeItem(item))}>
        <DeleteSVG />
      </button>
    </div>
  )
}
