import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTasksComponent } from './filter-tasks.component';
import { By } from '@angular/platform-browser';

describe('FilterTasksComponent', () => {
  let component: FilterTasksComponent;
  let fixture: ComponentFixture<FilterTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterTasksComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterChanged event when filter is changed', () => {
    spyOn(component.filterChanged, 'emit');
    const select = fixture.debugElement.query(By.css('select'));
    select.nativeElement.value = 'Completed';
    select.nativeElement.dispatchEvent(new Event('change'));
    expect(component.filterChanged.emit).toHaveBeenCalledWith('Completed');
  });
});

