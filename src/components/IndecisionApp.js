import React from "react"
import Header from "./Header"
import Options from "./Options"
import Action from "./Action"
import AddOption from "./AddOption"

import OptionModal from "./OptionModal"
export default class IndecisionApp extends React.Component{

    state={
        list:[],
        selectedOption:undefined
    }
    // constructor(props){
    //   super(props);
    //   this.handleDeleteOptions=this.handleDeleteOptions.bind(this);

    //   this.handlePick=this.handlePick.bind(this);
      
    //   this.handleDeleteOption=this.handleDeleteOption.bind(this);

    //   this.handleAddOption=this.handleAddOption.bind(this);
    //   this.state = {
    //       list:props.list
    //   }

    // }
    
    //Lifecyle method
    componentDidMount(){


        //To catch error
        try{
                   // console.log("it gets mouted");
        //For setting state
        const json=localStorage.getItem("list");

        const array=JSON.parse(json);
        if(array){

            this.setState(()=>({
                list:array
            }))
        }
        }
        catch(e){
                  
            //Do nothing at all
        }
       
        
            
    }

    //Another Lifecycle method
    componentDidUpdate(prevProps,prevState) {
       
        //To stop redundant storage of data
        if(prevState.list.length!== this.state.list.length){

            const json=JSON.stringify(this.state.list);
            localStorage.setItem("list",json);
            console.log("saving data");
        }
        
        
    }
    //Another Lifecycle method
    componentWillUnmount() {
        console.log("unmount....");
        
    }
    

    handleDeleteOptions=() => {

        this.setState(() =>({list:[]}))
    }

     //To delete single option

     handleDeleteOption=(optionToRemove) => {
        //  console.log("delete this",option);
        this.setState((prevState)=>({
            list:prevState.list.filter((option)=>{
                 
                return optionToRemove !== option;
            })
        }))
     }
    handlePick=() => {
        const idx=Math.floor((Math.random())*this.state.list.length);
        const option=this.state.list[idx]
    //    alert(option);
    this.setState(()=>({
            
        selectedOption:option
    }))
    }

    handleAddOption=(option) => {

        if(!option){
            return "Enter valid value to add one"
        }
        else if(this.state.list.indexOf(option)>-1)// Means item already present
        {
             return "Item already present"
        }

        this.setState((prevState) =>({
            list:prevState.list.concat(option)
        }))
    }


    clearSelectedOption=() => {
            this.setState(()=>({
                selectedOption:undefined
            }))
    }
   

    render(){
        // const title="Indecision";
        const subtitle="Put your life in the hands of the computer";

        return(
            <div>
            <Header subtitle={subtitle}/>
            <div className="container">
            <Action 
            hasOption={this.state.list.length <= 0}
            handlePick={this.handlePick}
            />
            <div className="widget">
            <Options 
            list={this.state.list}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            <OptionModal selectedOption={this.state.selectedOption}
            
            clearSelectedOption={this.clearSelectedOption}/>
            </div>
            </div>
            </div>

        )
    }
}

//To give default option list
IndecisionApp.defaultProps={
    list:[]
}




