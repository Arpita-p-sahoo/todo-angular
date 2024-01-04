import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  updatedata(val:any){
    // send data to dashboard
  }
}
