import { IEvent } from './shared/index';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { ToastrService } from './../common/toastr.serive';
import { EventService } from './shared/events.service';


declare let toastr;

@Component({
 selector: 'events-list',
 styleUrls: ['../app.component.css'],
template: `
        <div><h2> Updated Events</h2>
        <!-- (eventClick)="clickedMe($event)"<h1>hello this is my Fundamentals angular project</h1><hr>-->
            <div class="row">
              <div *ngFor="let event of events" class="col-md-4 ">
<!--                 <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
 -->
  <events-thumbnail  [event]="event"></events-thumbnail>


          </div>
          </div>
         <!--<events-thumbnail  #thumbnail [event]="event2"></events-thumbnail>
          <button class="btn btn-primary" (click)="thumbnail.logHello()">Hello log
          </button>
          <h4>{{thumbnail.someProperty}}</h4>-->
      </div>
      `
})


/* <events-thumbnail [event]='event2'></events-thumbnail> */
export class EventsListComponent implements OnInit{
    events:IEvent[]
  constructor(private eventService: EventService ,

              private route:ActivatedRoute){

  }//private toastr:ToastrService,
    ngOnInit(){
        //this.events = this.eventService.getEvents().subscribe()
         //this.eventService.getEvents().subscribe(events=>{this.events=events})
         this.events = this.route.snapshot.data['events']

      }

     /*  handleThumbnailClick(eventName){
          this.toastr.success(eventName)
      } */
  /* event1={
id:1,
name:'Deepika',
dob:'21/5/1990',
pob:'Adoni , Andhra Pradesh , India.',
imageUrl:'',
location:{doorno:'6-612',area:'Telok Blangah',country:'Singapore'}
}
event2={
id:2,
name:'Sharath Chandra',
dob:'11/1/1989',
pob:'Kurnool , Andhra Pradesh , India.',
imageUrl:'',
location:{doorno:'6-612',area:'Telok Blangah',country:'Singapore'}
}

 */


clickedMe(data)
{
  console.log("received:", data)
}


}
