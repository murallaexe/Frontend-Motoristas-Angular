import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MotoristaService } from 'src/app/service/motorista.service';
import { OrdenesService } from 'src/app/service/ordenes.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-detalle-ordenes-tomadas',
  templateUrl: './detalle-ordenes-tomadas.component.html',
  styleUrls: ['./detalle-ordenes-tomadas.component.css']
})
export class DetalleOrdenesTomadasComponent implements OnInit {
  @Output() onDetallesTomadas =new EventEmitter();

  ordenTomada:any=[]
  selecionarCambioEstado:string="";
  idMotorista:string="";
  constructor(
    private motoristaService:MotoristaService,
    private authService:AuthService,
    private usuarioService:UsuarioService,
    private ordenesService:OrdenesService,
  ) { }

  ngOnInit(): void {

  }
  dataDeAppComponent(data:any,idMotorista:any){
    // console.log(data);
    // console.log(idMotorista);
    this.idMotorista=idMotorista;
    this.ordenTomada[0]=data;
  }
  irAtras(){
    this.onDetallesTomadas.emit({url:"ordenesTomadas",data:'datas'});
  }
  Guardarcambio(){
    // console.log(this.selecionarCambioEstado);
    //var arrayPedidosCliente;
    var idOrdenMotorista;
    this.motoristaService.obtenerInformacionMotorista(this.idMotorista).subscribe(
      res=>{
        //console.log(res.ordenes);
        for(let pedidos of res.ordenes){
          if(this.ordenTomada[0].idOrden==pedidos.idOrden){
            //arrayPedidosCliente=pedidos;
            idOrdenMotorista=pedidos._id;
            //this.motoristaService.cambiarEstadoCliente(this.idMotorista)
            //console.log("pedido es:", idOrdenMotorista);
            this.motoristaService.cambiarEstadoMotoristaOrden(this.idMotorista,idOrdenMotorista,this.selecionarCambioEstado).subscribe(
              result=>{
                //console.log(result);
              },
              error=>console.log(error)
            )
          }
        }
      },
      error=>console.log(error)
    );
      
    var idOrdencliente;
    this.usuarioService.obtenerRegistro(this.ordenTomada[0].idCliente).subscribe(
      res=>{
        // console.log(res.listaPedidos);
        for(let pedidos of res.listaPedidos){
          if(this.ordenTomada[0].idOrden==pedidos.idOrden){
            idOrdencliente=pedidos._id
            // console.log(idOrdencliente);
            this.usuarioService.cambiarEstadoCliente(this.ordenTomada[0].idCliente,idOrdencliente,this.selecionarCambioEstado).subscribe(
              result=>{
                // console.log(result)
              },
              error=>{
                console.log(error)
              }
            )
          }
        }
      },
      error=>console.log(error)
    );
    this.ordenesService.estadosOrdenes(this.ordenTomada[0].idDatabaseOrden,this.selecionarCambioEstado).subscribe(
    res=>{
      // console.log(res);
      location.reload();
    },
    error=>{
      // console.log(error);
    }
    )
  }
  
}
