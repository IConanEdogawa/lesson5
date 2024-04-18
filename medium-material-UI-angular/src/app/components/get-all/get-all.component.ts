import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ViewData } from '../../model/view-data';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})

 export class GetAllComponent implements OnInit{
  users: ViewData[] = [];
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-email', 'demo-join-date'];

  constructor(private crud: CrudService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crud.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
