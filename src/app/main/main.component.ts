import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  ngOnInit(): void {
    let storedItems = localStorage.getItem('tasks');
    if(storedItems){
      this.taskList=JSON.parse(storedItems);
    }
  }
  @ViewChild('task') task: ElementRef | undefined;
  taskList:any[]=[];
  day=new Date();
  datepipe:DatePipe = new DatePipe('en-US');
  CurrentTime=this.datepipe.transform(this.day,'MMM dd HH:mm:ss');

  /**
   * Click function to add items to arr
   * @param task 
   */
  AddToToDo(task:string){
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
   */
  ClearAll(){
    localStorage.clear();
    this.taskList = [];
  } 
}
