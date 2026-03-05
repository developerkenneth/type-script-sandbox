import Bank from "./Bank.ts";

const myBank = new Bank("Kenneth", "UBA", "password");

myBank.setBalance(300);
myBank.transfer(10, "647363252", "Opay", "password");
myBank.transfer(29, "647363252", "Opay", "password");
myBank.transfer(87, "647363252", "Opay", "pass");
console.log(myBank.getBankDetails("password"));
console.log(myBank.showMessages());
console.log(myBank.showErrors());
console.log(myBank.showHistory());