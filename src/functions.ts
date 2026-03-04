// functions with an optional parameter
function calculate  (numberOne: number, numberTwo?:number){
    if (numberTwo) return numberOne + numberTwo;
    return numberOne;
}

console.log(calculate(25));

const add = function(numberOne: number, numberTwo: number){
    return numberOne + numberTwo;
}

console.log(add(25, 76));
console.log(add(25, 78));


// void means that a function does not return any value
function greet(message: string) :void{
        console.log(message);
}

greet("hello world");


// functions with default parameters
function addNumber (number: number = 0){
    return number + number;
}

console.log(addNumber(27));