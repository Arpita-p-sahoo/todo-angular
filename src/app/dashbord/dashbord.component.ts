import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../dilogs/edit/edit.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  constructor(public dataSvc:DataService,private dilog:MatDialog){

  }
  ngOnInit(): void {
    let storedItems = localStorage.getItem('tasks');
    if(storedItems){
      this.dataSvc.todoData=JSON.parse(storedItems);
    }
  }
  edit(item:any){ 
    this.dilog.open(EditComponent,{
      data:item
    });    
    
  }
  RemoveItem(id:number){
    const index = this.dataSvc.todoData.findIndex(item => item.id === id);
  if (index !== -1) {
    this.dataSvc.todoData.splice(index, 1);
  } else {
    console.log(`Item with ID ${id} not found.`);
  }
  }
//   console.log(id);
//   console.log(this.dataSvc.todoData);
//   this.dataSvc.todoData = this.dataSvc.todoData.filter(item => {
//     if (item.id !== null && item.id !== undefined) {
//       return item.id !== id;
//     }
//     return true; // Keep items with null or undefined ids
//   });
//   console.log(this.dataSvc.todoData);
// }
  
}