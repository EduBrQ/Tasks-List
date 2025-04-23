import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { By } from '@angular/platform-browser';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    localStorage.clear();
    component.close(true);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true when delete button is clicked', () => {
    spyOn(component.dialogClose, 'emit');
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.nativeElement.click();
    expect(component.dialogClose.emit).toHaveBeenCalledWith(true);
  });

  it('should emit false when cancel button is clicked', () => {
    spyOn(component.dialogClose, 'emit');
    const cancelButton = fixture.debugElement.query(By.css('.cancel-button'));
    cancelButton.nativeElement.click();
    expect(component.dialogClose.emit).toHaveBeenCalledWith(false);
  });
});