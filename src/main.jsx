import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Global, css } from "@emotion/react"

import store from "./redux/store"

import App from "./App"

const globalStyles = css`
  * {
    margin: 0;
    font-family: "Roboto", sans-serif;
    padding: 0;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <App />
    </Provider>
  </React.StrictMode>
)
