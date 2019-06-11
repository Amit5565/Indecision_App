
class IndecisionApp extends React.Component{

    constructor(props){
      super(props);
      this.handleDeleteOption=this.handleDeleteOption.bind(this);
      
      this.handlePick=this.handlePick.bind(this);
      
      this.handleAddOption=this.handleAddOption.bind(this);
      this.state = {
          list:[]
      }

    }
    

    handleDeleteOption(){

        
        this.setState(() => {
            return {
                list:[]
            };
        })
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
        this.setState((prevState) =>{
            
            return{
                list:prevState.list.concat(option)
            }
               
        })
    }
    render(){
        const title="Indecision";
        const subtitle="Put your life in the hands of the computer";

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
            hasOption={this.state.list.length <= 0}
            handlePick={this.handlePick}
            />
            <Options 
            list={this.state.list}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>

        )
    }
}

const Header=(props) =>{

    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    )
}

// class Header extends React.Component{
//      render(){
          
//          return (
//              <div>
//              <h1>{this.props.title}</h1>
//              <h2>{this.props.subtitle}</h2>
//              </div>
//          )
//      }
// }


const Action=(props) =>{
  
    return(
        <div>
        <button onClick={props.handlePick} disabled={props.hasOption}>What should I do ?
        </button>
        </div>
    )
}
// class Action extends React.Component{

//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={this.props.hasOption}>What should I do ?
//             </button>
//             </div>
//         )
//     }
// }


const Options=(props) =>{

    return (
            
        <div>
        {
            props.list.map((element) => <Option key={element} option={element} />)
        }
        <button onClick= {props.handleDeleteOption}>Remove All</button>
        </div>
      
     
    );
}
// class Options extends React.Component{

//     render(){
//         return (
            
//             <div>
//             {
//                 this.props.list.map((element) => <Option key={element} option={element} />)
//             }
//             <button onClick= {this.props.handleDeleteOption}>Remove All</button>
//             </div>
          
         
//         );
//     }
// }


const Option=(props) =>{
 
    return(
        <p>{props.option}</p>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <p>{this.props.option}</p>
//         )
//     }
// }
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
     
          this.setState(() =>{
              return {
                  error:error
              }
          })

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
ReactDOM.render(<IndecisionApp/>,document.getElementById("app"))