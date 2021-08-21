import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/service/auth.service';
import { MotoristaService } from 'src/app/service/motorista.service';
import { OrdenesService } from 'src/app/service/ordenes.service';
//import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {
  @Output() onDetalle =new EventEmitter();
  ordenesDetallesArray:any = [];
  dataMotoristaArray:any = [];
  idMotorista:any="";
  ocultarMore:boolean=false;
  ocultarProduct:boolean=false;
  faAngleDown=faAngleDown;
  constructor( 
    private motoristaService:MotoristaService,
    private ordenesService:OrdenesService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authe(localStorage.getItem('token')).subscribe(
      res=>{
        this.idMotorista=res.authData.data._id;
      },
      error=>{
        console.log(error);
      }
    )
    
  }
  VerDetallesPadre(data:any,dataMotorista:any){
    //console.log(data.producto);
    this.dataMotoristaArray[0]=dataMotorista;
    this.ordenesDetallesArray[0]=data;
    this.ordenesDetallesArray[0].cantidadProducto=parseInt(data.cantidadProducto);
    this.ordenesDetallesArray[0].precioProducto=parseInt(data.precioProducto);
    this.ordenesDetallesArray[0].comision=parseInt(data.comision);
    // console.log(this.ordenesDetallesArray);
    if(data.producto=="Pedido especial"){
      this.ocultarMore=true;
    }else{
      this.ocultarMore=false;
    }
  }
  irAtras(){
    this.onDetalle.emit("ordenesDisponibles");
  }
  TomarPedido(){
    //console.log(this.ordenesDetallesArray[0]);
    var enviarMotorista ={
      idDatabaseOrden: this.ordenesDetallesArray[0]._id,
      idCliente: this.ordenesDetallesArray[0].idCliente,
      idOrden: this.ordenesDetallesArray[0].idOrden,
      empresa: this.ordenesDetallesArray[0].empresa,
      producto: this.ordenesDetallesArray[0].producto,
      estadoOrden: 'tomada',
      descripcionPedido: this.ordenesDetallesArray[0].descripcionPedido,
      cantidadProducto: this.ordenesDetallesArray[0].cantidadProducto,
      tiempoEntrega: this.ordenesDetallesArray[0].tiempoEntrega,
      precioProducto: this.ordenesDetallesArray[0].precioProducto,
      comision: this.ordenesDetallesArray[0].comision,

      nombreCliente:this.ordenesDetallesArray[0].nombreCliente,
      telefonCliente:this.ordenesDetallesArray[0].telefonCliente,
      direccioncliente:this.ordenesDetallesArray[0].direccioncliente,

      productos:this.ordenesDetallesArray[0].productos,
      metodoPago:this.ordenesDetallesArray[0].metodoPago
    }
    //guardar data del motorista
    // console.log(enviarMotorista);
    // console.log(this.ordenesDetallesArray[0].idCliente);
    this.motoristaService.guardarOrdenesMotorista(this.idMotorista,enviarMotorista).subscribe(
      res=>{
        // console.log(res);
      },
      error=>console.log(error)
    )


    var putOrdenes ={
      estadoOrden: 'tomada',
      nombreMotorista: this.dataMotoristaArray[0].nombreUsuario,
      Idmotorista: this.dataMotoristaArray[0]._id,
      placaVehiculo:this.dataMotoristaArray[0].placaVehiculo,
    }
    this.ordenesService.cambiosEnOrdenes(this.ordenesDetallesArray[0]._id,putOrdenes).subscribe(
      res=>{
        // console.log(res);
      },
      error=>console.log(error)
    );

    this.motoristaService.obtenerRegistro(this.ordenesDetallesArray[0].idCliente).subscribe(
      result=>{
        //console.log(result.listaPedidos);
        for(let orden of result.listaPedidos){
          if(this.ordenesDetallesArray[0].idOrden==orden.idOrden){
            //console.log(orden._id);
            this.motoristaService.cambiarEstadoCliente(this.ordenesDetallesArray[0].idCliente,orden._id,{estadoOrden:'tomada'}).subscribe(
              res=>{
                // console.log(res)
                location.reload();
              },
              error=>console.log(error)
            )
          }
        }
      },
      error=>{
        // console.log(error);
      }
    )

    // console.log(putOrdenes);
  }
  ocultarProductos(){
    if(this.ocultarProduct==true){
      this.ocultarProduct=false;
    }else{
      this.ocultarProduct=true;
    }
  }
}
