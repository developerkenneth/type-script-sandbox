import {User} from "./User.ts";

const user = new User("kenneth", 26, "66398362");

user.setName("John Doe");
console.log(user.getDetails());