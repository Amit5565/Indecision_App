//This is where we need to put jsx


//In JSX we can have only one root element
const template= (
<div>
 <h1>Amit</h1>
 <p>Model Town</p>
 <ol>
 <li>IAS</li>
 </ol>
 </div>
);

//IN JSX Class is called className
const kahadalnahai=document.getElementById("app");

let count=0;

const add1=()=>{
    count=count+1;
    rendercounterapp();
}

const minus1=()=>{
    count--;
    rendercounterapp();
}

const reset=()=>{
   count=0;
   rendercounterapp();
}

const rendercounterapp= () =>{


    const template2= (
        <div>
        
        <h1>Count :{count}</h1>
        <button onClick={add1}>+1 </button>
         <button onClick={minus1}> -1</button>
         <button onClick={reset}>reset</button>
        </div>
    )
    
    
    ReactDOM.render(template2,kahadalnahai);
    
    
}
rendercounterapp();