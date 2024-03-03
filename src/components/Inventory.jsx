import Candy from "./Candy"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectInventory } from "../redux/inventorySlice"
import { addInventory, fetchInventory } from "../redux/inventorySlice"
import { css } from "@emotion/react"

export default function Inventory() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.inventory.entities)
  const loading = useSelector((state) => state.inventory.loading)
  const error = useSelector((state) => state.inventory.error)

  useEffect(() => {
    dispatch(fetchInventory())
  }, [dispatch])

  if (loading === "pending") {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const styles = css`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
  `

  return (
    <div css={styles}>
      {products.map((product) => (
        <Candy key={product.id} candy={product} />
      ))}
    </div>
  )
}
