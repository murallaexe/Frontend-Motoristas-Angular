import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { OrdenesService } from 'src/app/service/ordenes.service';

@Component({
  selector: 'app-ordenes-disponibles',
  templateUrl: './ordenes-disponibles.component.html',
  styleUrls: ['./ordenes-disponibles.component.css']
})
export class OrdenesDisponiblesComponent implements OnInit {
  @Output() onVerOrdenes = new EventEmitter();
  @Output() onVerDetalleOrdenDisponible = new EventEmitter();
  nombreMotorista:String="";
  faMapMaker = faMapMarker;
  regionVisible:string=""
  ordenesArray:any=[];
  constructor(
    private ordenesService:OrdenesService
  ){ }

  ngOnInit(): void {
    this.ordenesService.obtenerOrdenes().subscribe(
      res=>{
        // console.log(res);
        var indice=0;
        for(var i=0;i<res.length;i++){
          if(res[i].estadoOrden=='origen'){
            this.ordenesArray[indice]=res[i];
            indice++;
          };
        };
        console.log(this.ordenesArray);
      },
      error=>{
        console.log(error);
      }
    )
  }

  verOrdenes(){
    // console.log('ver region ordenes tomadas');
    this.regionVisible="ordenes";
    this.onVerOrdenes.emit(this.regionVisible);
  }

  verDetalleOrdenDisponible(idOrden:any){
    var datas;
    // console.log('ver Orden: ', idOrden);
    this.regionVisible= "detalleOrdenDisponible";
    for( let orden of this.ordenesArray){
      if(orden._id==idOrden){
        datas=orden;
      }
    }
    // console.log(datas);
    this.onVerDetalleOrdenDisponible.emit({url:this.regionVisible,data:datas});
    // console.log('region visible:', this.regionVisible);
  }
  obtenerDataPadre(nombreM:any,data:any){
    var nombre = nombreM.split(' ') 
    this.nombreMotorista= nombre[0];
    //console.log(nombre[0]);
    
  }
}
