export {}
let message ='welcome back';
// console.log(message);
let name: string = 'rishabh';
// name = true;
let sentence: string =` my name is is ${name}`
// console.log(sentence);

// let myvariable: unknown = 10;
// console.log(myvariable.name);
// myvariable();
// (myvariable as string).toUpperCase();

//type of inference

let a;
a = 10;
a = true;

let b = 10;

// ability to specify union

let multitype: number | boolean;
multitype = 20;
multitype = true;

// no-restriction in any

let anytype: any;
anytype = 20;
anytype = true;
anytype = 'hello';

// Function

// function add(num1: number, num2?: number): number{  == optional
function add(num1: number, num2: number = 10): number{    //== default

    if(num2)
    return num1+num2;
    else
    return num1;
}
add(5,10); //=15
// add(5, '10');   === error
add(5); //15 bec b=10 as default

// interface
interface person{
    firstname: string;
    secondname: string;
}

function fullname(person: person){
    console.log(`${person.firstname} ${person.secondname}`)
}
let p = {
    firstname: 'rishabh',
    secondname: 'jain'
};
// fullname(p);

// class
 class employee{
     employeename: string;
     constructor(name: string){
         this.employeename = name;
     } 
     greet(){
         console.log(`good morning ${this.employeename}`);
     }
 }
 let emp1 = new employee('rishabh');
 console.log(emp1.employeename);
 emp1.greet();

 class manager extends employee {
     constructor(managername: string){
         super(managername);
     }
     delegatework(){
          console.log(`manager delegating tasks`);
     }
 }

 let m1 = new manager('bruce');
 m1.delegatework();
 m1.greet();
 console.log(m1.employeename);