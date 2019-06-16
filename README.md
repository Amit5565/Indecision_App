#Webpack
-> Add babel-cli and live-server locally so that we can see it in the package.json file

-> Make a script object in package.json file to rename the long commands of live-server and babel

-> Also add a key value pair of webpack

-> Finally make a webpack.config.js file in the root of the application

#Import and export

->First export the function  from utils.js file 
.For eg:export{ square}

->Then import the exported function from utils.js as import{square} from "utils.js"

#Both square should match in both app.js and utils.js


#We can have only 1 default export
export{square, add, subtract as default}

for using default export
import subtract, {square, add} from "utils.js"

#export default cannot come before const

const subtract=(a,b) => a-b;
export default subtract

export default can come before class


#To get  to know where the error comes from 

create devtool:"cheap-module-eval-source-map"

#To use new class features add 

"plugin":[
        "transform-class-properties"
    ]
    in .babelrc

    and also install locally babel-plugin-transform-class-properties
#Old and New Syntax
    class OldSyntax{
    constructor(){
        this.name="Amit"
    }
}
const oldsyntax=new OldSyntax();
console.log(oldsyntax);

//New Synatx

class NewSyntax{
    name="Amit"
}

const newsyntax=new NewSyntax();
console.log(newsyntax)

#We can define tags inline at time of render

Then we use props.children in a stateless component to acces the inline content
