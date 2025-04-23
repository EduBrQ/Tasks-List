import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/features/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$ = new BehaviorSubject<Task[]>([]);
  filter$ = new BehaviorSubject<string>('All');
  filteredTasks$ = this.filter$.pipe(
    map(filter => {
      const tasks = this.tasks$.getValue();
      if (filter === 'Completed') {
        return tasks.filter(task => task.completed);
      } else if (filter === 'Incomplete') {
        return tasks.filter(task => !task.completed);
      }
      return tasks;
    })
  );

  isDialogOpen = false;
  taskToDelete: Task | null = null;

  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks$.next(JSON.parse(savedTasks) as Task[]);
    }
    this.filter$.next(this.filter$.getValue());
  }

  addTask(title: string): void {
    if (title.trim()) {
      const tasks = this.tasks$.getValue();
      const newTask: Task = { id: Date.now(), title: title.trim(), completed: false };
      this.tasks$.next([...tasks, newTask]);
      this.saveTasks();
    }
  }

  toggleTaskCompletion(task: Task): void {
    const tasks = this.tasks$.getValue().map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    this.tasks$.next(tasks);
    this.saveTasks();
  }

  deleteTask(task: Task): void {
    this.taskToDelete = task;
    this.isDialogOpen = true;
  }

  handleDialogClose(confirmed: boolean): void {
    if (confirmed && this.taskToDelete) {
      const tasks = this.tasks$.getValue().filter(t => t.id !== this.taskToDelete.id);
      this.tasks$.next(tasks);
      this.saveTasks();
    }
    this.isDialogOpen = false;
    this.taskToDelete = null;
  }

  setFilter(filter: string): void {
    this.filter$.next(filter);
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.getValue()));
    this.filter$.next(this.filter$.getValue());
  }
}
