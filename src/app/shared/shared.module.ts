import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FilterTasksComponent } from './components/filter-tasks/filter-tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListItemsComponent } from './components/task-list-items/task-list-items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        AddTaskComponent,
        FilterTasksComponent,
        TaskItemComponent,
        TaskListItemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ConfirmDialogComponent,
        AddTaskComponent,
        FilterTasksComponent,
        TaskItemComponent,
        TaskListItemsComponent
    ]
})
export class SharedModule { }