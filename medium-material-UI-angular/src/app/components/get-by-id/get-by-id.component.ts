import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ViewData } from '../../model/view-data';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent {
  MyId: string = '';
  users: ViewData[] = [];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-email', 'demo-join-date'];

  constructor(private crud: CrudService) {}

  onSubmit() {
    this.crud.getById(this.MyId).subscribe({
      next: (data: ViewData) => {
        this.users = [data]; // Replace the current users with the fetched user
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
