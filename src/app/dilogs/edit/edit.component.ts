import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dataSvc:DataService) {}

  EditTodoForm = new FormGroup({
    id: new FormControl(this.dataSvc.todoData.length),
    title: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required])
  })
  updatedata(val:any){
    // send data to dashboard
    console.log(val);
    let editeddata = this.EditTodoForm.value;
    this.dataSvc.todoData.push(editeddata);    
  }
}
