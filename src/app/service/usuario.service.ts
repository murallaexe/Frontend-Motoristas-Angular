import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  obtenerInformacionUnUsuario(idUsuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}`,{});
  }
  obtenerRegistro(idUsuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/registro`,{});
  }
  cambiarEstadoCliente(idUsuario:any,idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${idUsuario}/CambiosEstadoOrdenes/${idOrden}`,{
      estadoOrden:informacion
    })
  }
  
}
