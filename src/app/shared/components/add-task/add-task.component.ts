import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTaskTitle = '';

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskAdded.emit(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }
}