import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string='http://localhost:3000/api/users'
  
  constructor(
    private http:HttpClient
  ) { }

  assecc():void{
    this.http.get(this.url).subscribe(data=>{
      console.log(data)
    })
  }
  read():Observable<any>{
    return this.http.get(this.url);
  }
  delete(id:number):Observable<any>{
    return this.http.delete<User>(`${this.url}/${id}`)
  }
  create(data:User):Observable<User>{
    console.log(data)
    return this.http.post<User>(`${this.url}`,data) 
  }
  getOne(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/getone/${id}`)
  }

  update(data:User,id:number):Observable<User>{
    return this.http.post<User>(`${this.url}/update/${id}`,data)
  }
  }