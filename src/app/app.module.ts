import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './core/components/task-list/task-list.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { AddTaskComponent } from './core/components/add-task/add-task.component';
import { FilterTasksComponent } from './core/components/filter-tasks/filter-tasks.component';
import { TaskItemComponent } from './core/components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ConfirmDialogComponent,
    AddTaskComponent,
    FilterTasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }