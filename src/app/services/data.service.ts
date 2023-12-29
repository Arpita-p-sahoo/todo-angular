import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  todo_data:any='';
  // todoData :Array<Partial<{ id: number | null | undefined; title: string | null; tags: string | null; }>>=[];
  todoData:any[]=[];
}
