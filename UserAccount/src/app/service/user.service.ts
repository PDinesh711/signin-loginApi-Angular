import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="https://localhost:7187/api/User";

  constructor(public http:HttpClient) {
   
  }
  
getUserService(){
  return this.http.get<any>(`${this.baseUrl}/getAll`);
}

   createUserService(post:User){
let postBody={
    "id": 0,
    "name": post.UserName,
    "email": post.UserEmail,
    "password": post.UserPassword,
    "confirm_Password": post.UserRepeatPassword,
    "mobileNumber": post.UserMobileNumber
  }

  return this.http.post<any>(`${this.baseUrl}/save`,postBody,{responseType:'json'})
}

updateService(i:number,edit:User){
  let putBody={
    "id": 0,
    "name": edit.UserName,
    "email": edit.UserEmail,
    "password": edit.UserPassword,
    "confirm_Password": edit.UserRepeatPassword,
    "mobileNumber": edit.UserMobileNumber
  }
  return this.http.put<any>(`${this.baseUrl}/update/${i}`,putBody,{responseType:'json'});
}

deleteService(i:number){
  return this.http.delete<any>(`${this.baseUrl}/delete/${i}`);
}

// "id": 0,
// "name": "string",
// "email": "string",
// "password": "string",
// "confirm_Password": "string",
// "mobileNumber": 0

}
