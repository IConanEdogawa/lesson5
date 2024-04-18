import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  isTrue:boolean = false;
  
  User!: User;
  MyId: string="";
  resultData: CreateUser = {
    name: '',
    userName: '',
    email: '',
    bio: '',
    photoPath: '//c/ed/eefrefrfce//dedededed/eded/ed/e',
    followersCount: 150000,
    login: '',
    password: '',
  }; 

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

  Update(){
    this.crudService.delete(this.MyId).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    },)
    this.crudService.createUser(this.resultData)
  }

}
