import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  submitLoginForm() {
    // Here you can handle form submission logic, such as sending data to a server
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
