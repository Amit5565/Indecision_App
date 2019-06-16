import React from "react"
import Option from "./Option"
const Options=(props) =>

     (
            
        <div >
        <div className="widget-header">
        <h3>Your Options</h3>
        <button 
        className="button button--link"
        onClick= {props.handleDeleteOptions}>Remove All</button>
        </div>
        {
            
            
            props.list.map((element) => <Option key={element} optionText={element}
            handleDeleteOption={props.handleDeleteOption}
            />)
        }
        {props.list.length==0 && <p className="widget-message">Please add elements to the list </p>}
        </div>
      
     
    );


export default Options