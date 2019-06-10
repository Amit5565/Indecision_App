
class IndecisionApp extends React.Component{

    constructor(props){
      super(props);
      this.handleDeleteOption=this.handleDeleteOption.bind(this);
      
      this.handlePick=this.handlePick.bind(this);
      
      this.state = {
          list:["fsfsf","fhhkfhf","fdgdggd"]
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
    render(){
        const title="Indecision";
        const subtitle="Put your life in the hands of the computer";
        // const list=["fsfsf","fhhkfhf","fdgdgd"]
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
            <AddOption/>
            </div>

        )
    }
}

class Header extends React.Component{
     render(){
          
         return (
             <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
             </div>
         )
     }
}

class Action extends React.Component{

    // handlePick(){
    //     alert("fdfdf");
    // }
    render(){
        return(
            <div>
            <button onClick={this.props.handlePick} disabled={this.props.hasOption}>What should I do ?
            </button>
            </div>
        )
    }
}


class Options extends React.Component{

    // constructor(props){
    //        super(props);
    //        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    // }
    
    // handleRemoveAll(){
    //     //To have acces to list of options
    //        console.log(this.props.list)
    // }
    render(){
        return (
            
            <div>
            {
                this.props.list.map((element) => <Option key={element} option={element} />)
            }
            <button onClick= {this.props.handleDeleteOption}>Remove All</button>
            </div>
          
         
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <p>{this.props.option}</p>
        )
    }
}
class AddOption extends React.Component{


    handleAddOption(e){
        e.preventDefault();
          let item=e.target.elements.option.value.trim();
        if(item){
            alert("dgfghf");
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name ="option" placeholder="Add Something"></input>
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}

//No longer needed with parent component
// const jsx=(
//     <div>
//     <Header/>
//     <Action/>
//     <Options/>
//     <AddOption/>
//     </div>
// )
ReactDOM.render(<IndecisionApp/>,document.getElementById("app"))