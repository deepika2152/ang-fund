import { Router, Routes } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/index';

@Component({
selector: 'create-event',
templateUrl:'create.event.component.html',
styles: [ `
.container { padding-left:20px; padding-right:20px;}
           .event-image { height: 100px; }
em { float:right; color:#E05C65;}
.error input {background-color:#E3C3C5;}
.error ::-webkit-input-placeholder{ color:#999;}
.error ::-moz-placeholder{color:#999;}
.error :-moz-placeholder{color:#999;}
.error : ms-input-placeholder {color:#999;}

`]

})

export class CreateEventComponent
{
  newEvent
  event:any
 isDirty:boolean = true;
  constructor(private router: Router,private eventService:EventService){

}
ngOnInit(){
/*
 this.newEvent={
name: 'ng-newevent',
date: new Date(6/4/2021),
time: '11:00 PM',
price:788,
imageUrl:  '/assets/images/angularconnect-shield.png',

location:{
  address:'02-612, Telok Blangah',
  city:'Singapore',
  country:'Singapore'
},
onlineURL:'www.newevent.com',

 } */

}
saveEvent(formValues)
{
this.eventService.saveEvent(formValues)
this.isDirty = false;
 this.router.navigate(['/events']);

}

 cancel(){
 this.router.navigate(['/events']);

 }
}
