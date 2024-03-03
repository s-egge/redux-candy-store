import { css } from "@emotion/react"
import { useSelector } from "react-redux"
import { distinctProducts } from "../redux/cartSlice"

export default function Header() {
  const cartCount = useSelector(distinctProducts)
  console.log("distinctProducts: ", cartCount)

  const styles = css`
    background-color: #7f7ffc;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    button {
      position: relative;
      background-color: #7f7ffc;
      border: none;
      cursor: pointer;
      color: inherit;
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
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        <p className="cartTotal">{cartCount}</p>
      </button>
    </div>
  )
}
