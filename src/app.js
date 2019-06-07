//This is where we need to put jsx


//In JSX we can have only one root element


//IN JSX Class is called className
const kahadalnahai=document.getElementById("app");

const numbers=[55,66,77];
const frame={
    title:"Indecision App",
    subtitle:"Phhkhh",
    options:[]
}


const onformsubmit=(e) =>{
  //TO avoid full page reference
  e.preventDefault();
   
  //To hold the value that the user had entered

  const option=e.target.elements.options.value;
  if(option)
  {
      frame.options.push(option);
      //Wiping the input
      e.target.elements.options.value="";
      render();
  }
}


//Reset Button to clear array to ""
//on click->wipe the array



const reset=() =>{

    frame.options.splice(0,frame.options.length);
    render();
}

const render= () =>{

    const template= (
        <div>
         <h1>{frame.title}</h1>
         {frame.subtitle && <p>{frame.subtitle}</p>
         } 
         <p>{frame.options.length>0?"Here are your options":"No options"}</p>
         <p>{frame.options.length}</p>
         <button onClick={reset}>Reset</button>
         {
             numbers.map((element) => {
                 return <p key={element}> Number:{element} </p>;
             })
         }
         
         
         <ol>
         {
             frame.options.map((element) =>{
                return <li key={element}> {element}</li>
             })
         }
         </ol>
         <form onSubmit={onformsubmit}>
          <input type="text" name="options" placeholder="Add something"/>
          <button>Add Options</button> 
         </form>
         </div>
        );
        
        ReactDOM.render(template,kahadalnahai);
}
render();