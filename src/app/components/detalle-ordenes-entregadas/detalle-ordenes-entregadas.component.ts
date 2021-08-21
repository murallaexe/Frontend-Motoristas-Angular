import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalle-ordenes-entregadas',
  templateUrl: './detalle-ordenes-entregadas.component.html',
  styleUrls: ['./detalle-ordenes-entregadas.component.css']
})
export class DetalleOrdenesEntregadasComponent implements OnInit {
  @Output() onDetallesEntrega = new EventEmitter();
  faAngleDown=faAngleDown;
  ocultarMore:boolean=false;
  ocultarProduct:boolean=false;
  ordenEntregada:any=[]
  constructor() { }

  ngOnInit(): void {
  }
  irAtras(){
    this.onDetallesEntrega.emit({url:"ordenesEntregadas",data:'datas'});
  }
  obtenerData(data:any){
    console.log(data)
    this.ordenEntregada[0]=data;
    if(data.producto=="Pedido especial"){
      this.ocultarMore=true;
    }else{
      this.ocultarMore=false;
    }
  }
  ocultarProductos(){
    if(this.ocultarProduct==true){
      this.ocultarProduct=false;
    }else{
      this.ocultarProduct=true;
    }
  }
}
