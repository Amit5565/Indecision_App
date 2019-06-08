
class IndecisionApp extends React.Component{

    
    render(){
        const title="Indecision";
        const subtitle="Put your life in the hands of the computer";
        const list=["fsfsf","fhhkfhf","fdgdgd"];
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options list={list}/>
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
    render(){
        return(
            <div>
            <button>What should I do ?</button>
            </div>
        )
    }
}


class Options extends React.Component{

    render(){

       
        return (
            <div>
            {
                this.props.list.map((element) => <Option key={element} option={element} />)
            }
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
    render(){
        return(
            <div>
            <form>
            <input type="text" placeholder="Add Something"></input>
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