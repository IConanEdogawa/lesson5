import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ElementData } from '../../model/element-data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  elementData: ElementData = {
    name: '',
    userName: '',
    email: '',
    bio: '',
    photoPath: '',
    followersCount: 0,
    login: '',
    password: ''
  };
  creationMessage: string | undefined;

  constructor(private crudService: CrudService) { }

  
  create(): void {
    this.crudService.createUser(this.elementData).subscribe({
      next: (response: any) => {
        // Assuming the API returns a string message like "created !"
        console.log('Response from API:', response);
        // You can handle the response here if needed
      },
      error: (error: any) => {
        console.error('Error creating user:', error);
        // You can handle errors here if needed
      }
    });
  }
  

  clearForm(): void {
    this.elementData = {
      name: '',
      userName: '',
      email: '',
      bio: '',
      photoPath: '',
      followersCount: 0,
      login: '',
      password: ''
    };
  }
}

