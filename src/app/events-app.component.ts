import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    
    <router-outlet></router-outlet>

  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //template: `<div><h1>This is events app Component page</h1></div>`

})
export class EventsAppComponent {
  title = 'Ang-Funda';
}
