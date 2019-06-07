const app=document.getElementById("app");

let visibility=false;
const toggle=() =>{
      visibility=!visibility
      render();
   
}

const render=()=>{

    const template=(

        <div>
        
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}> {visibility?"Hide details":"Show details"}</button>
       {
         <p>{visibility?"Surprise I am Amit Kumar Singh an IAS officer":""}</p>
       }
        </div>   
       )
       ReactDOM.render(template,app);
}
render();
