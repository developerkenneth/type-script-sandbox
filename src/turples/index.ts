// creating a turple
let items: [boolean, string, number];
items = [false, "hello world", 24];

items.push("hello guys");

console.log(items);

// creating read only turples
let readOnlyTurple: readonly [boolean, string, object, number];

readOnlyTurple = [
  false,
  "welcome to a new school",
  {
    name: "kenneth",
    age: 35,
  },
  35,
];

console.log(`${readOnlyTurple[2].age} \n`);

// creating a named turple

const graph : [x: number, y: number] = [24, 45];

console.log(graph);

