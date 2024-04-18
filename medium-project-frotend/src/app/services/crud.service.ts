import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CreateUser } from '../models/create-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7274/api/User/";

  constructor(private http : HttpClient) { }

  getAll() : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "GetAllUsers");
  }

  createUser(user: CreateUser) : Observable<CreateUser> {
    return this.http.post<CreateUser>(this.baseUrl + "CreateUser", user);

  }

  getById(id: string) : Observable<User> {
    return this.http.get<User>(`${this.baseUrl}GetByIdUser?Id=${id}`);
  }

  delete(id: string) : Observable<string> {
    
    return this.http.delete<string>(`${this.baseUrl}DeleteUser?Id=${id}`);
  }
  }



