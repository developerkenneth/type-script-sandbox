class Bank {

    private  histories: string[] = [];
    private balance : number = 0;
    public name : string;
    public bankName : string;
    public error : string[] = [];
    public messages : string [] = [];

    public constructor (name: string, bankName: string){

        this.bankName = bankName;
        this.name = name;
    }


    public setBalance (amount: number) :boolean{
            this.balance = amount;
            return true;
    }

    public credit (amount: number) : boolean{      

        // check if amount is greater than balance
        if(amount > this.balance){
                this.error.push("insufficient funds!");
                return false;
        }

        if(amount < 5){
            this.error.push("you cannot withdraw less than 5");
            return false;
        }

        this.balance = this.balance - amount;
        this.messages.push("transfer completed successfully. thank you for banking with us.");
        return true;
    
    }

    public isEmptyMessages () : boolean {
        return this.messages.length < 1 ;
    }

    public showMessages () : void | boolean {
        
        if(this.isEmptyMessages()){
            this.messages.forEach(message => console.log(message));
        }

        return false;
    }

}