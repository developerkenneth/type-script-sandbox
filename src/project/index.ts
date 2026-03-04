// creating a calculator
function calculator(
  numberOne: number,
  numberTwo: number,
  arithmetic: string,
): any {
  switch (arithmetic) {
    case "+":
      return numberOne + numberTwo;
      break;
    case "-":
      return numberOne - numberTwo;
      break;
    case "/":
      return numberOne / numberTwo;
      break;
    case "*":
      return numberOne * numberTwo;
      break;

    default:
      return "arithmetic is not recognized";
  }
}

console.log(calculator(4, 26, "%"));

// looping through a string array
const students: string[] = ["kenneth", "kelechi", "agness", "otis", "amaka"];

students.forEach((student): void => console.log(student));

// creating an object
const person: {
  name: string;
  age: number;
  height: string;
  company: {
    address: string;
    name: string;
  };
} = {
  name: "kenneth",
  age: 26,
  height: "6'2",
  company: {
    address: "no. 1 nurudeen",
    name: "kreit",
  },
};

