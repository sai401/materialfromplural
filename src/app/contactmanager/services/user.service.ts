import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';


@Injectable()
export class UserService {
  private _url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  getEmployees():Observable<User[]>{
    return this.http.get<User[]>(this._url).catch(this.errorHandler);
   }
   errorHandler(error: HttpErrorResponse) {
     return Observable.throw(error.message||"Server Error");
   }

}
