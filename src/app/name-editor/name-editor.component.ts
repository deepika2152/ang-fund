import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  editNameForm:FormGroup;
  uname:FormControl;
    submitted = false;

  constructor(private fb:FormBuilder) {}


    ngOnInit() {
      this.editNameForm=this.fb.group({
      uname: ['',Validators.required]

    });
  }

    get f() { return this.editNameForm.controls; }

  onSubmit(){
     this.submitted = true;
    if (this.editNameForm.valid) {
      return
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');

  }

  }

}
