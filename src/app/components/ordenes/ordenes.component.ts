import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  @Output() onOrdenesTomadas = new EventEmitter();
  @Output() onOrdenesEntregadas = new EventEmitter();
  @Output() onAppComponent = new EventEmitter();
  regionVisible:any='';
  contadorOrdenesEntregadas:any;
  contadorOrdenesTomadas:any;
  constructor() { }

  ngOnInit(): void {
    this.contadorOrdenesTomadas = localStorage.getItem('CountOT');
    this.contadorOrdenesEntregadas = localStorage.getItem('CountOE');
  }

  ordenesTomadas(){
    this.regionVisible="ordenesTomadas"
    this.onOrdenesTomadas.emit(this.regionVisible);
  }

  ordenesEntregadas(){
    this.regionVisible="ordenesEntregadas"
    this.onOrdenesEntregadas.emit(this.regionVisible);
  }
  irAtras(){
    this.regionVisible="ordenesDisponibles"
    this.onOrdenesEntregadas.emit(this.regionVisible);
  }
}
