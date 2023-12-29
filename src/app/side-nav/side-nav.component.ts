import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoFormComponent } from '../dilogs/add-todo-form/add-todo-form.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(public dilog:MatDialog){}

  OpenAddTodoForm(){
    this.dilog.open(AddTodoFormComponent)
  }
}
