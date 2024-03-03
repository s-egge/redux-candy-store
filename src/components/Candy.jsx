import { css } from "@emotion/react"

export default function Candy({ candy }) {
  const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: fit-content;
    padding: 20px;
    margin: 10px;

    img {
      width: 100px;
      height: 100px;
    }
  `

  return (
    <div css={styles}>
      <h4>{candy.name}</h4>
      <p>Price: ${candy.price}</p>
      <p>In Stock: {candy.inStock}</p>
      <img src={candy.photoUrl} alt={candy.name} />
    </div>
  )
}
