import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/features/models/task.model';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() taskToggled = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  toggleCompletion(): void {
    this.taskToggled.emit(this.task);
  }

  deleteTask(): void {
    this.taskDeleted.emit(this.task);
  }
}