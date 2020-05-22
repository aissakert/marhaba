import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private connectedUser : User;

  constructor(private http:HttpClient, private router : Router) { 
   
  }

  public login(email:string, password:string){

    const headers = new HttpHeaders({Authorization : 'Basic ' + email + ":" + password});
    this.http.get("http://localhost:8080/login", {headers, responseType : 'json' }).subscribe(
      data => {
        this.connectedUser = JSON.parse(data as string);
        this.router.navigate(['']); 
      },
      error => {
        console.error("login error" + error); 
      }
    ); 
  }

  public saveUser(user : User){
    ;
    const headers = new HttpHeaders({Authorization : 'Basic ' + this.connectedUser.email + ":" + this.connectedUser.password});
    this.http.post("http://localhost:8080/users", {headers,user, responseType : 'json' }).subscribe(
      data => {
        this.connectedUser = JSON.parse(data as string);
        this.router.navigate(['']); 
      },
      error => {
        console.error("login error" + error); 
      }
    ); 
  }

  public isConnected(){
    return this.connectedUser != undefined;
  }

  public getConnectedUserinfos(){
    return this.connectedUser;
  }
}
