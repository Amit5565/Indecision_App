class CounterApp extends React.Component{
    

    constructor(props){
        super(props);
       this.handleMinusOne=this.handleMinusOne.bind(this);

       this.handleOne=this.handleOne.bind(this);

       this.handleReset=this.handleReset.bind(this);

    //Setting default value for setting state
    this.state={
        count:props.count
    }

    }

    componentDidMount(){
       
        const json=localStorage.getItem("count");
       console.log(json);
       
        this.setState(()=>({
            count:json
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        const json=(prevState.count);
        
        localStorage.setItem("count",json);
    }
    
    handleOne(){
        // alert("+1");
       //To manipulate our default state
       this.setState((prevState) => {
           return {
               count:parseInt(prevState.count,10)+1
           };
       });
    }
    handleMinusOne(){
        //alert("-1");
        this.setState((prevState) => {
            return {
                count:prevState.count-1
            }
        })
    }
    handleReset(){
        // alert("0");

        this.setState(() => {
            return {
                count:0
            }
        })
    }
    render(){
        return(
            <div>
            <h1>Count:{this.state.count} </h1>
            <button onClick={this.handleOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
  
            </div>
        )
    }
}

CounterApp.defaultProps={
    count:0
}
ReactDOM.render(<CounterApp />,document.getElementById("app"));

