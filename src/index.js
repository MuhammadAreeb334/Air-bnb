import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"

ReactDOM.render(<App />, document.getElementById("root"))

/*
new method
import {createRoot} from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App />)
*/