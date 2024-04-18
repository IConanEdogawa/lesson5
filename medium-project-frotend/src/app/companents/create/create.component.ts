import { Component } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  isTrue:boolean = false;
  
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

  constructor(private crudService: CrudService) {}

  createUser(data: CreateUser) {
    this.crudService.createUser(data).subscribe({
      next: (res) => {
        this.resultData = res;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  setUser(){
    this.createUser(this.resultData);
    this.isTrue = true;

  }

  refreshPage() {
    window.location.reload();
  }

  public trumi(){
    this.isTrue = false;
  }
}

