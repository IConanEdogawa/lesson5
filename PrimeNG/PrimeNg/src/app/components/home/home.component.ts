import { Component, OnInit } from '@angular/core';
import { User } from '../../moduls/user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products!:User[];

  constructor(private crud : CrudService){

  }
  
  ngOnInit(): void {
    
      this.getAllUsers();
  };
  
  getAllUsers(){
    this.crud.getAll().subscribe({
      next : (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    
  }
  
}
