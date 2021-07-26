import { AuthService } from './auth.service';
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "../shared/events.service";
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.serive';

@Component({
templateUrl:'./profile.component.html',
 styles: [ `
em { float:right; color:#E05C65;}
.error input {background-color:#E3C3C5;}
.error ::-webkit-input-placeholder{ color:#999;}
.error ::-moz-placeholder{color:#999;}
.error :-moz-placeholder{color:#999;}
.error : ms-input-placeholder {color:#999;}

`]
})

export class ProfileComponent implements OnInit{
  profileForm:FormGroup
   private lastName: FormControl;
   private firstName: FormControl;
   
 isDirty:boolean = true;
    event:any

  constructor(private eventService:EventService,private authService:AuthService,
              private route:ActivatedRoute,
              private router: Router, @Inject(TOASTR_TOKEN)private toastr: Toastr)
  {

  }
 ngOnInit()
 {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required,Validators.pattern('[a-zA-Z].*')]);

    this.lastName = new FormControl(this.authService.currentUser.lastName,
      [Validators.required,Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName

    });
   //this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
 }

saveProfile(formValues)
{
  if(this.profileForm.valid){
    this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
    //this.router.navigate(['/events']);
    this.toastr.success('Profile Saved!')
}

}

 cancel(){
 this.router.navigate(['/events']);
}
validateFirstName()
{
       return this.firstName.valid || this.firstName.untouched
}
validateLastName()
{
       return this.lastName.valid || this.lastName.untouched
}


}
export function checkDirtyState(Component:ProfileComponent){
if(Component.isDirty)
return window.confirm('Your Profile has been updated successfully!')
return true
}
