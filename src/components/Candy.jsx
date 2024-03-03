import { css } from "@emotion/react"

export default function Candy({ candy }) {
  const styles = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    width: 250px;
    height: 250px;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }

    input {
      width: 50px;
      margin-right: 10px;
    }
  `

  return (
    <div css={styles}>
      <h4>{candy.name}</h4>
      <img src={candy.photoUrl} alt={candy.name} />
      <p>Price: ${candy.price}</p>
      <p>Stock: {candy.inStock}</p>
      <div>
        <input type="number" step="1" min="0" />
        <button>Add to cart</button>
      </div>
    </div>
  )
}
