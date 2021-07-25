import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Motorista-Angular';
  regionVisible: string = "ordenesDisponibles";

  verOrdenes(e:any){
    console.log('desde App Component',e);
    this.regionVisible= e;
    console.log(this.regionVisible);
  }

  verDetalleOrden(e:any){
    this.regionVisible = e;
    console.log('AppComponent:' , e);
  }

  verOrdenesTomadas(e:any){
    this.regionVisible = e;
  }

  verOrdenesEntregadas(e:any){
    this.regionVisible = e;
  }
}
