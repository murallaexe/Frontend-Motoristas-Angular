import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  obtenerInformacionUnUsuario(idUsuario:any):Observable<any>{
    return this.httpClient.get(`https://vejadelivery.herokuapp.com/usuarios/${idUsuario}`,{});
  }
  obtenerRegistro(idUsuario:any):Observable<any>{
    return this.httpClient.get(`https://vejadelivery.herokuapp.com/usuarios/${idUsuario}/registro`,{});
  }
  cambiarEstadoCliente(idUsuario:any,idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`https://vejadelivery.herokuapp.com/usuarios/${idUsuario}/CambiosEstadoOrdenes/${idOrden}`,{
      estadoOrden:informacion.estado,
      precio:informacion.precio
    })
  }

}
