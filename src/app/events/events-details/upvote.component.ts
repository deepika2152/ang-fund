import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component
({
selector: 'upvote',

styleUrls: ['./upvote.component.css'],
template: `

 <div class ="votingWidgetContainer pointable" (click)= "onClick()">
    <div class="well votingWidget">
      <div class="votingButton">
                  <i i-bs name="heart-fill" width="25" height="25" [style.color]="iconColor">
                  </i>
                  <!-- <i i-bs *ngIf ="!voted" name="suit-heart" width="25" height="25" style="color:green">
                  </i>-->
      </div>

       <div class="badge badge-inverse votingCount">
              <div>{{count}}</div>
            </div>
    </div>
 </div>

`


})
export class UpvoteComponent{
  @Input() count: number;
  @Input() set voted(val)
  {
    this.iconColor = val ? 'red': 'white';
  }

  @Output() vote = new EventEmitter();
  iconColor: string;


onClick(){
 this.vote.emit({});
}

}

