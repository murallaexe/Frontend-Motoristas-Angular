import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  @Output() onOrdenesTomadas = new EventEmitter();
  @Output() onOrdenesEntregadas = new EventEmitter();
  regionVisible:any='';

  constructor() { }

  ngOnInit(): void {
  }

  ordenesTomadas(){
    this.regionVisible="ordenesTomadas"
    this.onOrdenesTomadas.emit(this.regionVisible);
  }

  ordenesEntregadas(){
    this.regionVisible="ordenesEntregadas"
    this.onOrdenesEntregadas.emit(this.regionVisible);
  }

}
