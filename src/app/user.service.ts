import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://race-page-back.onrender.com'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/registration`;
    return this.http.post(url, userData);
  }

 

  getUsers(): Observable<any> {
    const url = `${this.baseUrl}/users`;
    return this.http.get(url);
  }

  // getUsersByFilter(filter: string): Observable<any> {
  //   const url = `${this.baseUrl}/users/${filter}`;
  //   return this.http.get(url);
  // }
}
