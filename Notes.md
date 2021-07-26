-->Node and Npm- to getup and run the application.
-->Typescript is superset of javascript,i.e what ever we do in javascript,we can do in Typescript using the exact same syntax along with additional features. using transpiling our code(js+typescript) is converted to javascript.
-->fearures of typescript: static typing, interfaces, class properties, private/public access.
--statictyping: allows us to specify data types for variables,properties and parameters.etc
let name: string, let age:number;
--interfaces: interface Icat
{
  name:string, 
  age?:number
}
let flues:Icat
flues{
  name:'deep'
}
--class properties: 
class cat{
  name r name:string 
  constructor (name){
    this.name=name;
  }
  speak(){
    console.log("stmts" +this.name)
  }
}
--private/public: all the class members are public by default in ES2015 and Typescript. 
1. Public: All the properties and methods could be accessed everywhere if they are declared as public. 2. Private: The private declared properties and methods can be accessed only within the class definition itself.
-->installing angular CLI(Command Line Interface)
npm install -g angular/cli@11.2.3
-->for creating a new project
ng new ng-funda
--->to run our project
ng serve r ng s --o
-->package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
-->package. json file locates in project root and contains information about your web application. The main purpose of the file comes from its name package, so it'll contain the information about npm packages installed for the project
