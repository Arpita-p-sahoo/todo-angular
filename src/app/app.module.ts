import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddTodoFormComponent } from './dilogs/add-todo-form/add-todo-form.component';
import { DeleteTodoComponent } from './dilogs/delete-todo/delete-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './dilogs/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddTodoFormComponent,
    DeleteTodoComponent,
    SideNavComponent,
    DashbordComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
