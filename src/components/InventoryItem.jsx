import { css, useTheme } from "@emotion/react"
import { useSelector, useDispatch } from "react-redux"
import { reduceInventory } from "../redux/inventorySlice"
import { useState } from "react"

export default function InventoryItem({ item }) {
  const dispatch = useDispatch()
  const theme = useTheme()
  const [quantity, setQuantity] = useState(0)
  const inStock = item.inStock

  const handleChange = (event) => {
    const input = parseInt(event.target.value)
    //input is valid
    if (!isNaN(input) && input >= 0 && input <= inStock) {
      setQuantity(input)
      //input is greater than inStock
    } else if (input > inStock) {
      setQuantity(inStock)
      alert("That number is greater than the stock available.")
      //input is less than 0 or NaN
    } else {
      setQuantity(0)
    }
  }

  const handleAddToCart = () => {
    if (quantity === 0) {
      return
    }
    const cartItem = {
      item: item,
      quantity: quantity,
    }
    dispatch(reduceInventory(cartItem))
    setQuantity(0)
  }

  const styles = css`
    background-color: ${theme.primaryColor};
    border: 1px solid ${theme.primaryHighlight};
    color: ${theme.text};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    width: 250px;
    height: 250px;

    .imgContainer {
      width: 120px;
      height: 120px;
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

    input {
      width: 50px;
      padding: 3px;
      border-radius: 5px;
      margin-right: 10px;
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

    button:disabled {
      background-color: ${theme.grey};
      cursor: not-allowed;
    }

    button:disabled:hover {
      transform: none;
    }
  `

  return (
    <div css={styles}>
      <h4>{item.name}</h4>
      <div className="imgContainer">
        <img src={item.photoUrl} alt={item.name} />
      </div>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>{item.inStock > 0 ? `Stock: ${item.inStock}` : "Out of stock"}</p>
      <div>
        <input
          type="number"
          value={quantity}
          step="1"
          min="0"
          max={inStock}
          onChange={handleChange}
        />
        <button onClick={handleAddToCart} disabled={inStock === 0}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
