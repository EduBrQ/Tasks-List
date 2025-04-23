import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TaskItemComponent } from '../task-item/task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.task = { id: 1, title: 'Test Task', completed: false };
    fixture.detectChanges();
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit taskToggled event when checkbox is toggled', () => {
    spyOn(component.taskToggled, 'emit');
    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]'));
    checkbox.nativeElement.click();
    expect(component.taskToggled.emit).toHaveBeenCalledWith(component.task);
  });

  it('should emit taskDeleted event when delete button is clicked', () => {
    spyOn(component.taskDeleted, 'emit');
    const deleteButton = fixture.debugElement.query(By.css('button'));
    deleteButton.nativeElement.click();
    expect(component.taskDeleted.emit).toHaveBeenCalledWith(component.task);
  });
});