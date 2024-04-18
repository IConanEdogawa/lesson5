import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ViewData } from '../../model/view-data';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  element_data: ViewData[] = [];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-email', 'demo-join-date', 'delete'];
  searchId: string = '';

  constructor(private crudService: CrudService) {}

  search(): void {
    if (!this.searchId) {
      // If searchId is empty, do nothing
      return;
    }

    this.crudService.getById(this.searchId).subscribe({
      next: (data: ViewData) => {
        if (data) {
          this.element_data = [data];
        } else {
          this.element_data = []; // Clear existing data if user not found
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteElement(): void {
    this.crudService.delete(this.searchId).subscribe({
      next: (response: any) => {
        if (response === "deleted !") {
          // Remove the deleted element from the UI
          this.element_data = this.element_data.filter(element => element.id.toString() !== this.searchId);
        } else {
          console.log("Unexpected response:", response);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
