import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  // variables
  message: any;
  @ViewChild('radioButton') radioButton!: MatRadioButton;
  constructor(public dataSvc: DataService, private dilog: MatDialog) { }

  AddTodoForm = new FormGroup({
    id:new FormControl(this.dataSvc.todoData.length),
    title: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required])
  })

  saveTodo(val:any) {
   console.log(val._value);
   
  }

  //   if(this.AddTodoForm.value.title==''){
  //     return;
  //   }
  //   const task = this.AddTodoForm.value;
  //   this.dataSvc.todoData.push(task);
  //   console.log(this.AddTodoForm.value);
    
  //   localStorage.setItem('tasks',JSON.stringify(this.dataSvc.todoData));
  //   this.dilog.closeAll();
  // }

}
