import {  Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{

  currentUser:IUser
  lastName: any;
  firstName: any;

  loginUser(userName:string, password:string){

    this.currentUser={
      id:1,
      userName: userName,
      firstName: userName,
      lastName: this.lastName,

    }
  }
isAuthenticated(){
  return !!this.currentUser;
  }
  updateCurrentUser(firstName:string,lastName:string)
  {
    //this.currentUser.firstName= userName
    this.currentUser.lastName=lastName
    this.currentUser.userName=firstName
   // this.currentUser.firstName=firstName

  }
}
