import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {urls} from "../configs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) {
  }

  getAllPost():Observable<IPost[]>{
    return this.HttpClient.get<IPost[]>(urls.posts)
  }
  getById(id:number):Observable<IPost>{
    return this.HttpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
