import React from "react"

export default class AddOption extends React.Component{


    // Create constructor when ever we are using this in the function
    state={
        error:undefined
    }
            
    // no longer needed when using ES-6 Function
    // constructor (props){
          
        //     super(props);
        //     this.handleAddOption=this.handleAddOption.bind(this);
        //     //  old syntax this.state ={
        //     //        error:undefined
        //     // }
        
        // }
    
    
         //This remains because this prt is suitable for the child and not the parent
        handleAddOption=(e) =>{
           
            e.preventDefault();
         
              let item=e.target.elements.option.value.trim();
              const error=this.props.handleAddOption(item);
         
              this.setState(() =>({error:error}))
    
    
              if(!error){
                  e.target.elements.option.value="";
              }
        }
        render(){
            return(
                <div>
                <div className="add-option-error">
                {this.state.error && <p>{this.state.error}</p>}
                </div>
                <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input placeholder" type="text" name ="option" placeholder="  Add Something"></input>
                <button className="button">Add Option</button>
                </form>
                </div>
            )
        }
    }