import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor( private httpClient:HttpClient) { }

  obtenerOrdenes():Observable<any>{
    return this.httpClient.get('http://localhost:8888/ordenes/',{});
  }
  cambiosEnOrdenes(idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/ordenes/${idOrden}`,{
      estadoOrden:informacion.estadoOrden,
      nombreMotorista:informacion.nombreMotorista,
      Idmotorista:informacion.Idmotorista,
      placaVehiculo:informacion.placaVehiculo,
    });
  }
  estadosOrdenes(idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/ordenes/${idOrden}/CambiosEstadoOrdenes/`,{
      estadoOrden:informacion,
    });
  } 
}
