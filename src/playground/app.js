
class IndecisionApp extends React.Component{

    constructor(props){
      super(props);
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);

      this.handlePick=this.handlePick.bind(this);
      
      this.handleDeleteOption=this.handleDeleteOption.bind(this);

      this.handleAddOption=this.handleAddOption.bind(this);
      this.state = {
          list:props.list
      }

    }
    
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
    

    handleDeleteOptions(){

        this.setState(() =>({list:[]}))
    }

     //To delete single option

     handleDeleteOption(optionToRemove){
        //  console.log("delete this",option);
        this.setState((prevState)=>({
            list:prevState.list.filter((option)=>{
                 
                return optionToRemove !== option;
            })
        }))
     }
    handlePick(){
        const idx=Math.floor((Math.random())*this.state.list.length);
        const option=this.state.list[idx]
       alert(option);
    }

    handleAddOption(option){

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


   

    render(){
        // const title="Indecision";
        const subtitle="Put your life in the hands of the computer";

        return(
            <div>
            <Header subtitle={subtitle}/>
            <Action 
            hasOption={this.state.list.length <= 0}
            handlePick={this.handlePick}
            />
            <Options 
            list={this.state.list}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>

        )
    }
}

//To give default option list
IndecisionApp.defaultProps={
    list:[]
}
const Header=(props) =>{

    return (
        <div>
        <h1>{props.title} </h1>
        {props.subtitle &&  <h2>{props.subtitle}</h2>}
       
        </div>
    )
}

//To give default value to props
Header.defaultProps={
    title:"Indecision"
}


const Action=(props) =>{
  
    return(
        <div>
        <button onClick={props.handlePick} disabled={props.hasOption}>What should I do ?
        </button>
        </div>
    )
}


const Options=(props) =>{

    return (
            
        <div>
        {
            
            
            props.list.map((element) => <Option key={element} optionText={element}
            handleDeleteOption={props.handleDeleteOption}
            />)
        }
        {props.list.length==0 && <p>No elements in the list </p>}
        <button onClick= {props.handleDeleteOptions}>Remove All</button>
        </div>
      
     
    );
}


const Option=(props) =>{
 
    return(
        <div>
        <p>{props.optionText}</p>
        <button onClick={(e) =>{
            props.handleDeleteOption(props.optionText)
        }}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component{


// Create constructor when ever we are using this in the function
    constructor (props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state ={
               error:undefined
        }
    
    }


     //This remains because this prt is suitable for the child and not the parent
    handleAddOption(e){
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
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name ="option" placeholder="Add Something"></input>
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}


// const User=(props) =>{
//     return (
//         <div>
//         <p>Name:{props.name}</p>
//         </div>
//     )
// }
ReactDOM.render(<IndecisionApp />,document.getElementById("app"))