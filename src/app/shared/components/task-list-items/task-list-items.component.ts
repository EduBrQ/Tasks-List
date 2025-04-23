import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/features/models/task.model';


@Component({
  selector: 'app-task-list-items',
  templateUrl: './task-list-items.component.html',
  styleUrls: ['./task-list-items.component.scss']
})
export class TaskListItemsComponent {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  toggleTask(task: Task): void {
    this.taskToggled.emit(task);
  }

  deleteTask(task: Task): void {
    this.taskDeleted.emit(task);
  }
}
