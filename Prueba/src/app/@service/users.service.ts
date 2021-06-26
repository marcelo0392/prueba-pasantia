import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../@modelos/Users';
import { Observable } from 'rxjs';

const httpOptions = {'content-type': 'application/json'}

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users>{
    const headers = httpOptions;
    return this.http.get<any>('https://api.github.com/users')
  }
}
