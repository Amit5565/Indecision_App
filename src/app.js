//This is where we need to put jsx


//In JSX we can have only one root element


//IN JSX Class is called className
const kahadalnahai=document.getElementById("app");

const numbers=[55,66,77];
const frame={
    title:"Indecision App",
    subtitle:"Put your life in the hands of the computer",
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


const onMakeDecision=() =>{
 
    const random=Math.floor(Math.random()*frame.options.length);
    const option=frame.options[random];
    alert(option);
}

const render= () =>{

    const template= (
        <div>
         <h1>{frame.title}</h1>
         {frame.subtitle && <p>{frame.subtitle}</p>
         } 
         <p>{frame.options.length>0?"Here are your options":"No options"}</p>
          <button disabled={frame.options.length>0? false:true} onClick={onMakeDecision}>What should I do??</button>
         <button onClick={reset}>Reset</button>
         
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