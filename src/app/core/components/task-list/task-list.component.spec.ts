import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list.component';
import { Task } from 'src/app/shared/models/task.model';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    localStorage.clear();
    component.handleDialogClose(true);
  });
  

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new task', () => {
    component.newTaskTitle = 'Test Task';
    component.addTask();
    expect(component.tasks$.value.length).toBe(1);
    expect(component.tasks$.value[0].title).toBe('Test Task');
  });

  it('should not add an empty task', () => {
    component.newTaskTitle = '';
    component.addTask();
    expect(component.tasks$.value.length).toBe(0);
  });

  it('should toggle task completion', () => {
    const task = { id: 1, title: 'Test Task', completed: false };
    component.tasks$.next([task]);
    component.toggleTaskCompletion(task);
    expect(component.tasks$.value[0].completed).toBe(true);
  });

  it('should delete a task', () => {
    const task = { id: 1, title: 'Test Task', completed: false };
    component.tasks$.next([task]);
    component.deleteTask(task);
    component.handleDialogClose(true);
    expect(component.tasks$.getValue().length).toBe(0);
  });

  it('should filter tasks by "Completed"', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
    ];
    component.tasks$.next(tasks);
    component.setFilter('Completed');
    fixture.detectChanges();

    let filteredTasks: Task[] = [];
    component.filteredTasks$.subscribe(tasks => filteredTasks = tasks);
    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].title).toBe('Task 1');
  });

  it('should filter tasks by "Incomplete"', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
    ];
    component.tasks$.next(tasks);
    component.setFilter('Incomplete');
    fixture.detectChanges();

    let filteredTasks: Task[] = [];
    component.filteredTasks$.subscribe(tasks => filteredTasks = tasks);
    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].title).toBe('Task 2');
  });
});