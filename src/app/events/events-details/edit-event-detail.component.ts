import { EventService, IEvent } from '../shared/index';
//import { EventService } from './shared/index';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
templateUrl:'edit-event-detail.component.html',

})
export class EditEventDetailComponent
{
  event:IEvent
  editEvent
  isDirty:boolean = true;
  //event: any;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private eventService:EventService){

}
ngOnInt(){
//this.editEvent={
//name:this.event?.id.name,}
 //this.editEvent = this.router.snapshot.data['events']
   this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])

}
updateEvent(formValues)
{
this.eventService.updateEvent(formValues)
this.isDirty = false;
 this.router.navigate(['/events']);

}
cancel(){
   this.router.navigate(['/events']);

}



}
