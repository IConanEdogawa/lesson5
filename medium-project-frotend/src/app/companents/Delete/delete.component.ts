import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {
  User!: User;
  MyId: string="";
  // MyId: string = "52b38b34-55fb-49ba-9502-3c6b419375df";
  constructor(private crudService: CrudService){}

  GetById(id: string){
    this.crudService.getById(id).subscribe({
      next: (result) => this.User = result,
      error: (err) => console.log(err),
    },)
  }

  ngOnInit(): void {
      this.GetById(this.MyId);
  }

  Delete(){
    this.crudService.delete(this.MyId).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    },)
  }

  
}
