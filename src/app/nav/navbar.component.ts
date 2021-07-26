import { Isession } from './../events/shared/event.model';


import { Component } from '@angular/core';
import { AuthService } from '../events/user/auth.service';
import { EventService } from '../events';


@Component(
{
selector: 'nav-bar',

templateUrl: '../nav/navbar.component.html',
styleUrls: [ '../nav/navbar.component.css']

})
export class NavBarComponent
{
  searchTerm: string = "";
  foundSessions: Isession[];

constructor(public auth:AuthService, private eventService :EventService){

}
searchSessions(searchTerm)
{
  this.eventService.searchSessions(searchTerm).subscribe
    (sessions => {this.foundSessions = sessions;
      //console.log(this.foundSessions);
  });

}
}
