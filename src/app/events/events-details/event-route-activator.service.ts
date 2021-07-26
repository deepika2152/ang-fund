import { EventService } from './../shared/events.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate{
constructor(private eventService:EventService,
            private router:Router){

            }
 

canActivate(route: ActivatedRouteSnapshot)
   {
const eventExists = !!this.eventService.getEvent(+route.params['id'])
  if(!eventExists)
  this.router.navigate(['/404'])
    return eventExists
}

}


