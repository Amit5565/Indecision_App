//This is where we need to put jsx


//In JSX we can have only one root element
const template= (
<div>
 <h1>Amit</h1>
 <p>Amit</p>
 <ol>
 <li>jljlljl</li>
 </ol>
 </div>
);
const kahadalnahai=document.getElementById("app");


let user={
  
    Age:20,
    Location:"fs.fkskf.sk.f"
}



//Conditional Rendering
 function getAge(age){

    if(age>15)
    {
        return "Your age is  greater";
    }
    else{
        return "Welcome";
    }
    
 }
var template2=(
<div>
<h1>{user.name ? user.name:'Ananonymous'}</h1>
{user.Age>=18 && <p>Age:{user.Age}</p>}
<p>Location:{user.Location}</p>
</div>
);





ReactDOM.render(template2,kahadalnahai);
//ReactDOM.render(template,kahadalnahai);