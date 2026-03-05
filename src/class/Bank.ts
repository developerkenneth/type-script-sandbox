export default class Bank {
  private histories: string[] = [];
  private balance: number = 0;
  private accountNumber: number = Math.floor(
    1000000000 + Math.random() * 9000000000,
  );
  private password: string;
  public name: string;
  public bankName: string;
  public errors: string[] = [];
  public messages: string[] = [];

  public constructor(name: string, bankName: string, newPassword: string) {
    this.bankName = bankName;
    this.name = name;
    this.password = newPassword;
  }

  public setBalance(amount: number): boolean {
    this.balance = amount;
    return true;
  }

  public transfer(
    amount: number,
    accountNumber: string,
    bankName: string,
    password: string,
  ): boolean {
    // check if amount is greater than balance
    if (amount > this.balance) {
      this.errors.push("insufficient funds!");
      return false;
    }

    if (amount < 5) {
      this.errors.push("you cannot withdraw less than 5");
      return false;
    }

    // security check
    if (password !== this.password) {
      this.errors.push("incorrect password please try again");
      return false;
    }

    this.balance = this.balance - amount;
    this.messages.push(
      "transfer completed successfully. thank you for banking with us.",
    );
    this.histories.push(
      `you made a successful transfer to account number:${accountNumber}, bank:${bankName}`,
    );
    return true;
  }

  public isEmptyMessages(): boolean {
    return this.messages.length < 1 ? true : false;
  }

  public showMessages(): void | boolean {
    if (this.messages.length >= 1) {
      this.messages.forEach((message) => console.log(message));
      this.messages = [];
    }

    return false;
  }

  public showHistory(): void {
    this.histories.forEach((history) => console.log(`${history} \n`));
  }

  public getBankDetails(password: string): void {
    // security check
    if (password === this.password) {
      console.log(`kindly find here your account details: \n
                    account name : ${this.name} \n
                    account number : ${this.accountNumber} \n
                    accout balance : ${this.balance}
                    `);
    } else {
      console.log("password does not match");
    }
  }

  public showErrors() : void | boolean {

    if(this.errors.length >= 1){
        this.errors.forEach(error => console.log(error));
    }else{
        return false;
    }
  }

}
