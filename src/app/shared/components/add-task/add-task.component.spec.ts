import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { FormsModule } from '@angular/forms';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit taskAdded event when a task is added', () => {
    spyOn(component.taskAdded, 'emit');
    component.newTaskTitle = 'New Task';
    component.addTask();
    expect(component.taskAdded.emit).toHaveBeenCalledWith('New Task');
  });

  it('should not emit taskAdded event for empty task', () => {
    spyOn(component.taskAdded, 'emit');
    component.newTaskTitle = '';
    component.addTask();
    expect(component.taskAdded.emit).not.toHaveBeenCalled();
  });
});
