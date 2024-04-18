import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementData } from '../model/element-data';
import { Observable } from 'rxjs';
import { ViewData } from '../model/view-data';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7274/api/User/";

  constructor(private http: HttpClient) { }

  getAll() : Observable<ViewData[]> {
    return this.http.get<ViewData[]>(this.baseUrl + "GetAllUsers");
  }

  createUser(user: ElementData) : Observable<ElementData> {
    return this.http.post<ElementData>(this.baseUrl + "CreateUser", user);

  }

  getById(id: string) : Observable<ViewData> {
    return this.http.get<ViewData>(`${this.baseUrl}GetByIdUser?Id=${id}`);
  }

  delete(id: string) : Observable<string> {
    
    return this.http.delete<string>(`${this.baseUrl}DeleteUser?Id=${id}`);
  }

}
