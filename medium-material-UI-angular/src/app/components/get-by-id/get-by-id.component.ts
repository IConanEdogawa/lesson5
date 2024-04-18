import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ViewData } from '../../model/view-data';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent {
  MyId = '';

  users: ViewData[] = [];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-email', 'demo-join-date'];
  user: any;

  constructor(private crud: CrudService) {}

  onSubmit(){
    this.crud.getById(this.MyId).subscribe({
      next: (data) => {
        this.user = data;
        this.users.push(this.user);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
