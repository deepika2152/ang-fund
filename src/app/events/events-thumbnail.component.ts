import { IEvent } from './shared/index';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
selector: 'events-thumbnail',
styleUrls: ['../app.component.css'],
template:`
<div class='block' [routerLink]="['/events',event.id]">
  <div class='content '>
    <h4 >Name: <span class="fontstyle">{{event?.name | uppercase}}</span></h4>
    <h6 [ngClass]="statusOfYears()">Doe: <span class="fontstyle">{{event?.date | date:'shortDate' }}</span></h6>

    <h6 [ngStyle]="{'color':event?.time == '9:00 am' ? 'green': 'white' }">Toe: <span class="fontstyle">{{event.time}}</span></h6>
    <h6 [class.white]="event?.price <= '400' " [ngSwitch]="event?.price">
    Poe:{{event?.price | currency:'USD'}}
    <span *ngSwitchCase="'400'">(mid rate)</span>
    <span *ngSwitchCase="'800'">(double rate)</span>
    <span *ngSwitchDefault>(normal rate)</span>
    </h6>
    <div *ngIf="event?.location">
<!--hiding an dshowing the content, if loation is there,it shows , otherwisw wont show.-->
    <h6>Location: <span class="fontstyle">{{event.location.address}} , {{event.location.city}} , {{event.location.country}}.</span></h6>
    </div>
    <div *ngIf="event?.onlineURL">
      <!--[hidden]="event?.location" -->
    <h6>onlineURL: {{event.onlineURL}}</h6>
      </div>
    <button class="btn btn-primary" (click)="clickMe()">Click me!</button>
</div>
</div>
     `,
     styles: [`
        .white { color: white;}
        .fontstyle { font-style:italic;}
        .yellow {color: yellow;}
        .bold {font-weight:bold;}
     `]
})
export class EventThumbnailComponent

{

  statusOfYears()
  {
    //const status = this.event && this.event.date >= '2/10/2037'
    // return {yellow: status, bold: status}

     if(this.event.date >= new Date('2/10/2037'))
     return ['yellow' , 'bold']

  }
@Input() event :IEvent;
//eventClick: any;
@Output() eventClick = new EventEmitter();


//@Output() eventClick = new EventEmitter()


clickMe(){
 // console.log('clicked!!');
  this.eventClick.emit(this.event.name)
}
logHello(){
console.log('hello, this is loghello')

}
someProperty: any ="This is some Property"
}
