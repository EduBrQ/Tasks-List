import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListItemsComponent } from './task-list-items.component';

describe('TaskListItemsComponent', () => {
  let component: TaskListItemsComponent;
  let fixture: ComponentFixture<TaskListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
