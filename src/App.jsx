import Inventory from "./components/Inventory"
import Header from "./components/Header"
import { ThemeProvider } from "@emotion/react"

export default function App() {
  return (
    <>
      <Header />
      <Inventory />
    </>
  )
}
