import React from "react"
import Modal from "react-modal"


const OptionModal=(props) => (
   <Modal className="modal"
   isOpen={!!props.selectedOption}
   onRequestClose={props.clearSelectedOption}
   contentLabel="Selected Option"
   closeTimeoutMS={200}
//    appElement={el}
   >

   <h3 className="modal__title">Selected Option</h3>
    <div className="modal__body" >
   {props.selectedOption && <p >{props.selectedOption}</p>}
   </div>
   <button  className="button" onClick={props.clearSelectedOption}>Okay</button>
   
   </Modal>
)



export default OptionModal