class Visiblity extends React.Component{

constructor(props){
  super(props);
  this.isVisible=this.isVisible.bind(this);
  this.state={
    visibility:false
  }
}
isVisible(){
  this.setState((prevState) =>{
      return{
        visibility:!prevState.visibility
      }
    
    
  })
}


  render(){
 
    return (

      <div>
      <button onClick={this.isVisible}>
      {this.state.visibility?"Hide details":"Show details"}
      </button>
      {
        <p>{this.state.visibility?"Sjjfdkgkf":""}</p>
      }
      </div>
    )
  }
}
ReactDOM.render(<Visiblity/>,document.getElementById("app"));


// const app=document.getElementById("app");

// let visibility=false;
// const toggle=() =>{
//       visibility=!visibility
//       render();
   
// }

// const render=()=>{

//     const template=(

//         <div>
        
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}> {visibility?"Hide details":"Show details"}</button>
//        {
//          <p>{visibility?"Surprise I am Amit Kumar Singh an IAS officer":""}</p>
//        }
//         </div>   
//        )
//        ReactDOM.render(template,app);
// }
// render();
