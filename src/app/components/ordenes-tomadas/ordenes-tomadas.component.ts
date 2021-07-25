import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ordenes-tomadas',
  templateUrl: './ordenes-tomadas.component.html',
  styleUrls: ['./ordenes-tomadas.component.css']
})
export class OrdenesTomadasComponent implements OnInit {
  @Output() onVerDetalleOrdenTomada = new EventEmitter();

  regionVisible:any=""
  constructor() { }

  ngOnInit(): void {
  }

  verOrdenTomada(idOrden:any){
    console.log('ver Orden con Id', idOrden);
    this.regionVisible = "detalleOrdenTomada";
    this.onVerDetalleOrdenTomada.emit(this.regionVisible);
  }
}
