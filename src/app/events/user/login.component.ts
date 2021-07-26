import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({

templateUrl: './login.component.html',
styles: [`
em{ float:right}
`]

})
export class LoginComponent
{
userName
password
mouseoverLogin

constructor(private authService:AuthService,private router:Router){

}
login(formValues)
{
 // console.log(formValues)
this.authService.loginUser(formValues.userName,formValues.password)
this.router.navigate(['events'])
}

cancel(){
  this.router.navigate(['events'])
}
}
