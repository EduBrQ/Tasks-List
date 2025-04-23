import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.scss']
})
export class FilterTasksComponent {
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(filter: string): void {
    this.filterChanged.emit(filter);
  }
}