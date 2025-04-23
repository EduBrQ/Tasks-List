import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

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

  newTaskTitle = '';

  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks$.next(JSON.parse(savedTasks));
    }
    
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const tasks = this.tasks$.getValue();
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        completed: false
      };
      this.tasks$.next([...tasks, newTask]);
      this.newTaskTitle = '';
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
    if (confirm('Are you sure you want to delete this task?')) {
      const tasks = this.tasks$.getValue().filter(t => t.id !== task.id);
      this.tasks$.next(tasks);
      this.saveTasks();
    }
  }

  setFilter(filter: string): void {
    this.filter$.next(filter);
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.getValue()));
    this.filter$.next(this.filter$.getValue());
  }
}