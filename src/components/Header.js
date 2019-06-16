import React from "react"


const Header=(props) =>
 (
    <div className="header" >
    <div className="container">
    <h1 className="header__title">{props.title} </h1>
    {props.subtitle &&  <h2>{props.subtitle}</h2>}
    </div>
    </div>
)

//To give default value to props
Header.defaultProps={
    title:"Indecision"
}
export default Header
