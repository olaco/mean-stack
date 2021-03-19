import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';

@Injectable({providedIn:'root'})

export class AuthService{

  constructor(private http: HttpClient){}

  createUser(email:string, password:string){

    const authData: AuthData= {email:email, password:password};
    // use the http client to send a post request
    // http://localhost:3000/api/posts/

    this.http.post('http://localhost:3000/api/user/signup', authData)
    .subscribe(response => {

      console.log(response);
    })
  }

}
