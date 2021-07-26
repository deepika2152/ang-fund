import { AuthService } from './events/user/auth.service';
import { UserModule } from './events/user/user.module';
import { ProfileComponent } from './events/user/profile.component';

import {
EventsListComponent,
EventDetailComponent,
CreateEventComponent,
EventListResolver,
EventRouteActivator,
EditEventDetailComponent,
CreateSessionComponent
}from './events/index'

import {  } from './events/create.event.component';
import { Routes } from '@angular/router';
import {  } from './events/events-details/event-detail.component';
import {  } from './events/events-list.component';
import { Error404Component } from './errors/404.component';
import {  } from './events/events-details/event-route-activator.service';
import {  } from './events/event-list-resolver.service';
import {  } from './events/events-details/edit-event-detail.component';
import { PracticeSessionComponent } from './practice/practicesession.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

export const appRoutes:Routes = [
{ path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
{ path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
{ path: 'event/newevent', component: CreateEventComponent, },
{ path: 'event/editevent', component: EditEventDetailComponent, },
{ path: 'events/session/newsession', component: CreateSessionComponent},

{ path: 'nameeditor', component: NameEditorComponent, },



{ path: 'event/practice', component:PracticeSessionComponent},

{ path: '' , redirectTo:'/events', pathMatch: 'full'},
{ path: '404', component: Error404Component},
//{ path: 'profile',component:ProfileComponent}
{ path:'user', loadChildren: () => import('./events/user/user.module')
  .then(m => m.UserModule)
}
]
export class RouterEvent{
constructor(private auth:AuthService){

}
}
