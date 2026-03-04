// casting: changing a type from one to another

const x : unknown = "35";

// casting x to a string 

console.log(x as number);
const newX = x as number;

console.log(typeof x);
console.log(typeof (<number> newX) );
