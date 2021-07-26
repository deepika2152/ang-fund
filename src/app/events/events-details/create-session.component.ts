import { map } from 'rxjs/operators';
import { Isession,restrictedWords } from '../shared/index';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
selector:'create-session',
templateUrl: './create-session.component.html',
styles: [`

.container { aglin:center; padding-right:20px;}
em { float:right; color:#E05C65;}
.error input , .error select, .error textarea{background-color:#E3C3C5;}
.error ::-webkit-input-placeholder{ color:#999;}
.error ::-moz-placeholder{color:#999;}
.error :-moz-placeholder{color:#999;}
.error : ms-input-placeholder {color:#999;}
`]
})
export class CreateSessionComponent implements OnInit
{
  constructor(private route:Router){

  }
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
 newSessionForm:FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  ngOnInit(): void {
this.name= new FormControl('',Validators.required)
this.presenter= new FormControl('',Validators.required)
this.duration= new FormControl('',Validators.required)
this.level= new FormControl('',Validators.required)
this.abstract= new FormControl('',[Validators.required,Validators.maxLength(300),restrictedWords(['foo','bar'])]);


   this.newSessionForm = new FormGroup({
        name:this.name,
        presenter:this.presenter,
        duration:this.duration,
        level:this.level,
        abstract:this.abstract
    })

 }/*
 private restrictedWords(words)
 { return (control: FormControl):{[key:string]:any } =>
 { if(!words) return null

  var invalidWords= words
  .map(w=>control.value.includes(w)? w: null)
  .filter(w =>w != null)
   return invalidWords && invalidWords.length > 0
   ? { 'restrictedWords': invalidWords.jion(',')}
   : null
 }
 } */


saveSession(formValues){
    //this.route.navigate[('/events/sessions')]
   // console.log(formValues)
   let session:Isession={
          id: undefined,
          name: formValues.name,
          presenter: formValues.presenter,
          duration: + formValues.duration,
          level: formValues.level,
          abstract: formValues.abstract,
          voters: []
   }
   //console.log(session)
   this.saveNewSession.emit(session)
  }

    cancel(){
   // this.route.navigate(['/events']);
    this.cancelAddSession.emit()

 }
}

