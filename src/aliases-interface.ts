const newUser: {
  age: number;
  name: string;
  height: string;
} = {
  age: 25,
  name: "kenneth",
  height: "6'5",
};

type car = {
  model: string;
  year: number;
  class: string;
};

const newCar: car = {
  model: "toyota",
  year: 2026,
  class: "classic car",
};

console.log(newCar);

// creating a new interface

interface Pay {
  amount: number;
  // Define the function signature: it takes no arguments and returns a number
  paypal: () => number;
}

const newPay: Pay = {
  amount: 25, // Use ':' for assignment

  // Use Method Shorthand so 'this' refers to 'newPay'
  paypal() {
    return this.amount;
  },
};

interface optionalPay extends Pay {
  bankTransfer(amount: number): number;
}
// Since paypal() takes no arguments in your interface, don't pass 25 here
console.log(newPay.paypal()); // Output: 25

const createPay: optionalPay = {
  amount: 26,
  paypal: function () {
    return this.amount;
  },
  bankTransfer: function (amount: number) {
    return amount;
  },
};

console.log(createPay.bankTransfer(100));
