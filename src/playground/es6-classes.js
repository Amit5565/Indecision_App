class Person{

   constructor(name="Ananymous",age=0){  //Is called by deafult
       this.name=name
       this.age=age
   }
   getGreeting(){
      // return "Hi I am "+this.name +"!";
      return `Hi I am ${this.name} !`;
   }
   getDescription(){
       return `${this.name} is ${this.age} year(s) old`;
   }
}


//Creating sub class

class Student extends Person{
  constructor(name,age,subject="undecided"){
    //call parent constructor 
    super(name,age);  
    this.subject=subject;
  }

  hasSubject(){
      return !!this.subject
  }
  //Overriding a Function
  getDescription(){
      let description=super.getDescription();
     if(!!this.hasSubject())
     {
         description+=` His subject is ${this.subject}`
     }
     return description
  }
}

//Creating instance of a class
const me=new Student("Amit",10,"Computer Science");
//console.log(me.getGreeting());
console.log(me.hasSubject(),me.getDescription());
const other=new Person();
console.log(other);



