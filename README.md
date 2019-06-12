# React Component

#use upper case letter for class extending react(upper cse convention)

#event handlers should be outside render()
trim() is used for removing initial spaces


#Inside options to avoid writing bind for handleRemoveAll event handler
 constructor(props){
           super(props);
           this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }

# State
To manipulate our default state
       this.setState(() => {
           return {
               count:1
           };
       });

       In setState write only those values which u wnat to update

#setState is asynchronous in nature which means that it does not update variable in the very next line


#To add default value to props
Header.defaultProps={
    title:"jds,jjfd"
}


#Another way of writing this.setState

this.setState(() =>({list:[]}))


#Lifecycle Methods
 
    componentDidMount(){
        console.log("it gets mouted");
        
    }

    //Another Lifecycle method
    componentDidUpdate() {
        console.log("Update .....");
        
        
    }
    //Another Lifecycle method
    componentWillUnmount() {
        console.log("unmount....");
        
    }
    
#parseInt(string,10)
converts string to int
here 10 is the base 