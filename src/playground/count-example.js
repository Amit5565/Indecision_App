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