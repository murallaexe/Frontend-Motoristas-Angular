import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router:Router,
  ) { }
  loggendin():boolean{
    return !!localStorage.getItem('token');
  }
  authe(informacion:any):Observable<any>{
    // return informacion;
    return this.httpClient.post(`vejadelivery.herokuapp.com/usuarios/posts`,{
      Authorization: informacion.token
    })
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    location.href= ('vejadelivery.herokuapp.com/VejaDelivery/AppCustomer');
  }
}
