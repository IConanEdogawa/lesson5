import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {

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

}
