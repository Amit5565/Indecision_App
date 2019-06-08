
class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Action/>
            <Options/>
            <AddOption/>
            </div>

        )
    }
}

class Header extends React.Component{
     render(){
         return (
             <div>
             <h1>Indecision App</h1>
             <h2>Put your life in the hands of the computer</h2>
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
            <p>Here are the options</p>
            <Option/>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <p>This is the option Component</p>
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