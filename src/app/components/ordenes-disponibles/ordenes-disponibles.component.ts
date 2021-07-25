import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ordenes-disponibles',
  templateUrl: './ordenes-disponibles.component.html',
  styleUrls: ['./ordenes-disponibles.component.css']
})
export class OrdenesDisponiblesComponent implements OnInit {
  @Output() onVerOrdenes = new EventEmitter();

  faMapMaker = faMapMarker;
  regionVisible:string=""
  constructor() { }

  ngOnInit(): void {
  }

  verOrdenes(){
    console.log('ver region ordenes tomadas');
    this.regionVisible="ordenes";
    this.onVerOrdenes.emit(this.regionVisible);
  }

}
