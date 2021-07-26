//import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { userRoutes } from './user.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

imports:[
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  RouterModule.forChild(userRoutes)
],
declarations:[
  ProfileComponent,
  LoginComponent
],
providers:[

/*   {provide:'CanDeactivateProfile', useValue: checkDirtyState}
 */]

})
export class UserModule{


}
/* export function checkDirtyState(Component:ProfileComponent){
if(Component.isDirty)
return window.confirm('Your Profile has been updated successfully!!')
return true
}
 */
