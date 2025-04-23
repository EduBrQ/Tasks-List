import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { StorageService } from '../../../core/services/storage.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let storageService: jasmine.SpyObj<StorageService>;

  beforeEach(async () => {
    const storageServiceSpy = jasmine.createSpyObj('StorageService', [
      'getItem',
      'setItem',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [{ provide: StorageService, useValue: storageServiceSpy }],
    }).compileComponents();

    storageService = TestBed.inject(
      StorageService
    ) as jasmine.SpyObj<StorageService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    storageService.getItem.and.returnValue(null);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks from storage on init', () => {
    const mockTasks = [{ id: 1, title: 'Test Task', completed: false }];
    storageService.getItem.and.returnValue(mockTasks);

    component.ngOnInit();

    expect(storageService.getItem).toHaveBeenCalledWith('tasks');
    expect(component.tasks$.getValue()).toEqual(mockTasks);
  });

  it('should save tasks to storage when a task is added', () => {
    component.addTask('New Task');
    expect(storageService.setItem).toHaveBeenCalledWith(
      'tasks',
      component.tasks$.getValue()
    );
  });
});
