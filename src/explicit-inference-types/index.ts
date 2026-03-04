// explicit typing

const age : number = 25;
const greetings : string = "hello world";
const loading : boolean = true ;

// explicit typing in functions
function intro (age:number, greetings:string) :string
{
        return `${greetings}! \n I am ${age} years old`;
}

console.log(intro(age, greetings));