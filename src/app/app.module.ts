import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './features/new-task/new-task.component';
import { ViewTasksComponent } from './features/view-tasks/view-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ViewTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
