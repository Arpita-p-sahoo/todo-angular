import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  // variables
  message: any;

  constructor(public dataSvc: DataService, private dilog: MatDialog) { }

  AddTodoForm = new FormGroup({
    id:new FormControl(this.dataSvc.todoData.length),
    title: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required])
  })

  saveTodo() {
    if(this.AddTodoForm.value.title==''){
      return;
    }
    const task = this.AddTodoForm.value;
    this.dataSvc.todoData.push(task);
    console.log(this.AddTodoForm.value);
    
    localStorage.setItem('tasks',JSON.stringify(this.dataSvc.todoData));
    this.dilog.closeAll();
  }

}
