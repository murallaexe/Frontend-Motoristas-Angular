import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor( private httpClient:HttpClient) { }
  obtenerInformacionMotorista(idUsuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/motorista`,{});
  }
  cambiarEstadoCliente(idUsuario:any,idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${idUsuario}/CambiosEstadoOrdenes/${idOrden}`,{
      estadoOrden:informacion.estadoOrden,
      precio:informacion.precio
    })
  }
  cambiarEstadoMotoristaOrden(idUsuario:any,idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/usuarios/${idUsuario}/CambiosEstadoOrdenes/${idOrden}/motorista`,{
      estadoOrden:informacion.estado,
      precio:informacion.precio
    })
  }
  guardarOrdenesMotorista(idUsuario:any,informacion:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/usuarios/${idUsuario}/motorista/ordenes`,{
      idDatabaseOrden:informacion.idDatabaseOrden,
      idCliente:informacion.idCliente,
      idOrden:informacion.idOrden,
      empresa:informacion.empresa,
      producto:informacion.producto,
      estadoOrden:informacion.estadoOrden,
      descripcionPedido:informacion.descripcionPedido,
      cantidadProducto:informacion.cantidadProducto,
      tiempoEntrega:informacion.tiempoEntrega,
      precioProducto:informacion.precioProducto,
      comision:informacion.comision,
      nombreCliente:informacion.nombreCliente,
      telefonCliente:informacion.telefonCliente,
      direccioncliente:informacion.direccioncliente,
      metodoPago:informacion.metodoPago,
    })
  }
  obtenerRegistro(idUsuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/registro`,{});
  }
}
