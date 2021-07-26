import { VoterService } from './voter.service';
//import { bookmark-star-fill } from '.';
import { Isession } from './../shared/index';
import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from '../user/auth.service';
//import { bookmark-star-fill } from "node_modules/ngx-bootstrap-icons/lib/icons/bookmark-star-fill"

@Component({
selector: 'session-list',
templateUrl:'./session-list.component.html',
styles:[`


.block {
  background-color: coral;
  margin: 2px 2px 2px 2px;
  padding: 2px;
  border: 1px;
  border: radius 2px ;


`]

})

export class SessionListComponent implements OnChanges
{
  constructor(private auth:AuthService, private voterService:VoterService){

  }

    @Input() sessions: Isession[];
    @Input() filterBy: string;
    @Input() sortBy: string;

    visibleSessions: Isession[]=[];

    ngOnChanges()
    {
      if(this.sessions)
      {
        this.filterSessions(this.filterBy);
        this.sortBy === 'name'? this.visibleSessions.sort(sortByNameAsc)
                              : this.visibleSessions.sort(sortByVotesDesc);

      }
    }

    toggleVote(session: Isession){
        if(this.userHasVoted(session)){
          this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else{
          this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
        if(this.sortBy ==='votes')
        this.visibleSessions.sort(sortByVotesDesc);

    }
  userHasVoted(session: Isession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
  filterSessions(filter) {
   if(filter === 'all'){
      this.visibleSessions= this.sessions.slice(0);
   }
   else{
      this.visibleSessions= this.sessions.filter(session =>{return session.level.toLocaleLowerCase()===filter;})
   }
  }
}
function sortByNameAsc(s1:Isession, s2:Isession) {
 if(s1.name > s2.name) return 1
 else if(s1.name === s2.name) return 0
 else return -1

}

function sortByVotesDesc(s1:Isession, s2:Isession) {
 return s2.voters.length - s1.voters.length;
}

