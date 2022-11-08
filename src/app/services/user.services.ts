import {Injectable} from '@angular/core';
import {IUser} from "../interfaces";
import {urls} from "../configs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private HttpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(urls.users)
  }

  getById(id:number): Observable<IUser> {
    return this.HttpClient.get<IUser>(`${urls.users}/${id}`)
  }
}
