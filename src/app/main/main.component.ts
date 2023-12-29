import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoFormComponent } from '../dilogs/add-todo-form/add-todo-form.component';
import { DeleteTodoComponent } from '../dilogs/delete-todo/delete-todo.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  [x: string]: any;
  constructor(public dilog:MatDialog){}
  ngOnInit(): void {
    let storedItems = localStorage.getItem('tasks');
    if(storedItems){
      this.taskList=JSON.parse(storedItems);
    }
  }
  @ViewChild('taskInput') taskInput!: ElementRef<HTMLInputElement>;
  taskList:any[]=[];
  day=new Date();
  datepipe:DatePipe = new DatePipe('en-US');
  CurrentTime=this.datepipe.transform(this.day,'MMM dd HH:mm:ss');

  /**
   * Click function to add items to arr
   * @param task 
   */
  AddToToDo(task:string){
    this.taskInput.nativeElement.value = ''; 
    if(task == '' || task == undefined){
      // TBD
    }
   const lists = {id:this.taskList.length,subject:task,Time:this.CurrentTime};
   this.taskList.push(lists);
   console.warn(this.taskList);
   localStorage.setItem('tasks',JSON.stringify(this.taskList));
   task= '';
  }


  /**
   * Individually removes the task
   * @param id 
   */
  RemoveItem(id:number){
    this.taskList = this.taskList.filter(item => item.id!==id);
  }


  /**
   * Clears the task 
   * 
   */
  ClearAll(){
    localStorage.clear();
    this.taskList = [];
  } 

  OpenDilog(){
    this.dilog.open(AddTodoFormComponent);
  }

  DeleteTodo(){
    this.dilog.open(DeleteTodoComponent)
  }
}
