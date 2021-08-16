import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-ordenes-entregadas',
  templateUrl: './detalle-ordenes-entregadas.component.html',
  styleUrls: ['./detalle-ordenes-entregadas.component.css']
})
export class DetalleOrdenesEntregadasComponent implements OnInit {
  @Output() onDetallesEntrega = new EventEmitter();

  ordenEntregada:any=[]
  constructor() { }

  ngOnInit(): void {
  }
  irAtras(){
    this.onDetallesEntrega.emit({url:"ordenesEntregadas",data:'datas'});
  }
  obtenerData(data:any){
    // console.log(data)
    this.ordenEntregada[0]=data;
  }
}
