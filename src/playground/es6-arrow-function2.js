
// const add=(a,b) => {
//     //console.log(arguments)
//     return a+b;
// }
// console.log(add(5,3,8009809));

//this keyword- no longer bound
const user={
    name:"Amit",
    cities:["Delhi","Mumbai","Gsfsfoa"],
    printplaceslived(){
        
        // this.cities.forEach((city)=>{
        //     console.log(this.name +' has lived in '+ city);
        // }); 


        //       for(var i=0;i<3;i++)
        //    {
        //     console.log(this.name+" has lived in "+this.cities[i]);
            
        //    }


        //Using Map
        const citymsg=this.cities.map((city) =>{
                   return this.name +" has lived in "+city
        })
        return citymsg;
        }
}

console.log(user.printplaceslived());

const multiplier={
    arr:[2,4,5],
    multiplyby(){
        const newarr=this.arr.map((elements) =>{
            return elements*2;
        })
        return newarr;
    }
}

console.log(multiplier.multiplyby());
