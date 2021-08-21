import { Component, OnInit, ViewChild } from '@angular/core';
import { DetalleOrdenComponent } from './components/detalle-orden/detalle-orden.component';
import { DetalleOrdenesEntregadasComponent } from './components/detalle-ordenes-entregadas/detalle-ordenes-entregadas.component';
import { DetalleOrdenesTomadasComponent } from './components/detalle-ordenes-tomadas/detalle-ordenes-tomadas.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdenesDisponiblesComponent } from './components/ordenes-disponibles/ordenes-disponibles.component';
import { AuthService } from './service/auth.service';
import { MotoristaService } from './service/motorista.service';
import { OrdenesService } from './service/ordenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('ordenesDisponible') ordenesDisponiblesComponent!:OrdenesDisponiblesComponent;
  @ViewChild('ordenesDetalles') detalleOrdenComponent!:DetalleOrdenComponent;
  @ViewChild('ordenesDetallesTomadas') detalleOrdenesTomadasComponent!:DetalleOrdenesTomadasComponent;
  @ViewChild('ordenesDetallesEntregada') detalleOrdenesEntregadasComponent!:DetalleOrdenesEntregadasComponent;
  @ViewChild('header') headerComponent!:HeaderComponent;

  title = 'Frontend-Motorista-Angular';
  regionVisible: string = "ordenesDisponibles";
  tokenss:string="";
  idMotorista:any;
  TokenssVisible:boolean=true;
  constructor(
    private authService:AuthService,
    private ordenesService:OrdenesService,
    private motoristaService:MotoristaService
  ){}
  ngOnInit(): void {
    //console.log(this.ordenesDisponiblesComponent,this.detalleOrdenComponent)
    //console.log(localStorage.getItem('token'));
    var tokens = localStorage.getItem('token');
    var token = {"token":tokens};
    if(localStorage.getItem('token')!=null){
      this.TokenssVisible=false;
      this.authService.authe(token).subscribe(
        res=>{
          console.log(res);
          this.idMotorista=res.authData.data._id;
          this.headerComponent.NombreUsuario=res.authData.data.nombreUsuario;
          this.headerComponent.imagenFoto=res.authData.data.UrlFoto;
          this.ordenesDisponiblesComponent.obtenerDataPadre(res.authData.data.nombreUsuario,'data');
          // if(res.authData.data.tipoUsuario=="motorista"){
          //   this.TokenssVisible=false;
          // }else{
          //   this.TokenssVisible=true;
          // }
        },
        error=>{
          console.log(error);
          localStorage.removeItem('token');
          location.reload();
        }
      )
    }else{
      this.TokenssVisible=true;
    };
  }
  verOrdenes(e:any){
    // console.log('desde App Component',e);
    this.regionVisible = e;
    // console.log(this.regionVisible);
  }

  verDetalleOrdenTomada(e:any){
    this.regionVisible = e.url;
    // console.log('AppComponent:' , e.url);
    this.detalleOrdenesTomadasComponent.dataDeAppComponent(e.data,this.idMotorista);
  }
  verDetalleOrdenEntregada(e:any){
    this.regionVisible = e.url;
    // console.log('AppComponent:' , e.url);
    this.detalleOrdenesEntregadasComponent.obtenerData(e.data);
  }

  verOrdenesTomadas(e:any){
    this.regionVisible = e;
  }

  verOrdenesEntregadas(e:any){
    this.regionVisible = e;
  }

  verDetalleOrdenDisponible(e:any){
    this.regionVisible = e.url;
    // console.log('regionVisible AppComponent:', e);
    this.motoristaService.obtenerInformacionMotorista(this.idMotorista).subscribe(
      res=>{
        // console.log(res);
        this.detalleOrdenComponent.VerDetallesPadre(e.data,res);
      },
      error=>console.log(error)
    )

  }
  
  GuardarSerial(){
    //console.log("tokes : ",this.tokenss);
    localStorage.setItem('token',this.tokenss);
    location.reload();
  }
}
