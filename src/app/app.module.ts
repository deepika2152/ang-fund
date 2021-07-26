import { PracticeSessionComponent } from './practice/practicesession.component';
import {  } from './common/simpleModal.component';
//import { Toastr } from './common/toastr.serive';
//import { DurationPipe } from './events/index';
import {  } from './events/events-details/edit-event-detail.component';
import { TOASTR_TOKEN,
   Toastr,JQ_TOKEN,
   CollapsibleWellComponent,
   SimpleModalComponent,
    ModalTriggerDirective,

  } from './common/index';

import {
EventsListComponent,
EventDetailComponent,
EventThumbnailComponent,
EventService,
CreateEventComponent,
EventRouteActivator,
EventListResolver,
EditEventDetailComponent,
CreateSessionComponent,
SessionListComponent,
DurationPipe,
UpvoteComponent,
VoterService,
LocationValidator
} from './events/index'

import {  }from './events/events-details'
import {  } from './events/shared/events.service';
import {  } from './events/events-thumbnail.component';
import {  } from './events/events-list.component';
import {  } from './events/events-details/event-detail.component';

import { EventsAppComponent } from './events-app.component';


import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {  } from './events/create.event.component';
import {  } from './events/events-details/event-route-activator.service';
import {  } from './events/event-list-resolver.service';
import { AuthService } from './events/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { allIcons, NgxBootstrapIconsModule, wind } from 'ngx-bootstrap-icons';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from './name-editor/name-editor.component';
//import { VoterService } from './events/events-details/voter.service';
//import { window } from 'rxjs/operators';
//import { DurationPipe } from './events/index'

//declare let toastr:Toastr
let toastr:Toastr = window['toastr'];
let jQuery = window['$'];




@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxBootstrapIconsModule.pick(allIcons),
    CommonModule
    //NgxBootstrapIconsLibComponent
  ],
 declarations: [
    //AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    EditEventDetailComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    PracticeSessionComponent,
    NameEditorComponent



  ],
  providers: [EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},

    EventRouteActivator, EventListResolver, AuthService, VoterService,

  { provide:'CanDeactivateCreateEvent', useValue: checkDirtyState

  }

  ],
  bootstrap: [EventsAppComponent ]
})
export class AppModule { }

export function checkDirtyState(Component:CreateEventComponent){
if(Component.isDirty)
return window.confirm('You have not saved the Event, Are you sure you want to cancel?')
return true
}
