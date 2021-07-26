import { Isession } from './../shared/event.model';
import { EventService,IEvent } from '../shared/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import {  } from '../shared/events.service';

@Component({
templateUrl: './event-detail.component.html',
styles: [` .container { padding-left:20px; padding-right:20px;}
           .event-image { height: 100px; }
          a {cursor:pointer}
`]

})
export class EventDetailComponent implements OnInit
{
  event:IEvent
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string ='votes';

  constructor(private router: Router,
              private route:ActivatedRoute,
              private eventService:EventService,
              )
  {

  }
 ngOnInit()
 {
    this.route.params.forEach((params: Params) => {this.event= this.eventService.getEvent(+params['id'])})
    this.addMode = false;

  // this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
 }
 back(){
 this.router.navigate(['/events']);

}
edit(){
 this.router.navigate(['event/editevent']);
}

addSession(){
  this.addMode=true
}
saveNewSession(session:Isession)
{
const nextId=Math.max.apply(null, this.event.sessions.map(s=> s.id))
session.id =nextId+1
this.event.sessions.push(session)
this.eventService.updateEvent(this.event)
this.addMode= false
}
cancelAddSession(){
  this.addMode=false
}
}
