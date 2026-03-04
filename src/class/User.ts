export class User {


    private NIN : string = "87373737836";
    public name : string = "Kenneth Otis";
    protected age : number = 26;


    public constructor (name: string , age: number, NIN: string) {
        this.name = name;
        this.age = age;
        this.NIN = NIN;
       
    }

    public getDetails() : void{
        console.log(this.name, this.age, this.NIN);
    }

    
    public setName (name: string): boolean{
        this.name = name;
        return true;
    }

}