import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ElementData } from '../../model/element-data';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
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
  MyId: string = '';
  updateMessage: string | undefined;

  constructor(private crudService: CrudService) { }

  onSubmit() {
    this.crudService.getById(this.MyId).subscribe({
      next: (data: ElementData) => {
        this.elementData = data; // Populate elementData with fetched user data
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  update(): void {
    this.crudService.updateUser(this.MyId, this.elementData).subscribe({
      next: (response: any) => {
        // Assuming the API returns a string message like "updated !"
        this.updateMessage = response;
      },
      error: (error: any) => {
        console.error('Error updating user:', error);
      }
    });
  }
}
