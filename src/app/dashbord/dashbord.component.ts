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
  date = new Date();
  constructor(public dataSvc: DataService, private dilog: MatDialog) {

  }
  ngOnInit(): void {
    let storedItems = localStorage.getItem('tasks');
    if (storedItems) {
      this.dataSvc.todoData = JSON.parse(storedItems);
    }
  }
  edit() {
    this.dilog.open(EditComponent);

  }
  RemoveItem(id: number) {
    const index = this.dataSvc.todoData.findIndex(item => item.id === id);
    if (index !== -1) {
      this.dataSvc.todoData.splice(index, 1);
    } else {
      console.log(`Item with ID ${id} not found.`);
    }
  }
}
