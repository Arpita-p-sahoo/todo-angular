import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoData:any[]=[];
  originalTodoData: any[] = [];
  

  constructor() {
    this.originalTodoData = [...this.todoData];
   }

  todo_data:any='';
  // todoData :Array<Partial<{ id: number | null | undefined; title: string | null; tags: string | null; }>>=[];

}
