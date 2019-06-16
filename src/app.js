//install -> import->use


import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp.js"
import 'normalize.css/normalize.css'
 import "./styles/styles.scss"


// const Layout=(props) => {
//     return (
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     )
// }


// ReactDOM.render(
//     <Layout>
//     <p>This is inline</p>
//     </Layout>
//     ,document.getElementById("app"))

    ReactDOM.render(
        <IndecisionApp/>
        ,document.getElementById("app"))


