import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MotoristaService } from 'src/app/service/motorista.service';

@Component({
  selector: 'app-ordenes-entregadas',
  templateUrl: './ordenes-entregadas.component.html',
  styleUrls: ['./ordenes-entregadas.component.css']
})
export class OrdenesEntregadasComponent implements OnInit {
  @Output() onOrdenes = new EventEmitter();

  idMotorista:string="";
  ordenesCompletadas:any=[];

  regionVisible:String="";
  constructor(
    private authService:AuthService,
    private motoristaService:MotoristaService
  ) { }

  ngOnInit(): void {
    this.authService.authe(localStorage.getItem('token')).subscribe(
      res=>{
        // console.log(res);
        this.idMotorista=res.authData.data._id;
        this.motoristaService.obtenerInformacionMotorista(this.idMotorista).subscribe(
          result=>{
            // for(let orden of result.ordenes){
            //   if(orden.estadoOrden=="completada"){
            //     this.ordenesCompletadas=result.ordenes;
            //     console.log(this.ordenesCompletadas);
            //   }else{
            //   }
            // }
            var indice=0;
            for(var i=0;i<result.ordenes.length;i++){
              if(result.ordenes[i].estadoOrden=='destino'){
                this.ordenesCompletadas[indice]=result.ordenes[i];
                indice=indice+1;
              }
            }
            // console.log(this.ordenesCompletadas);
            localStorage.setItem('CountOE',this.ordenesCompletadas.length);
          },
          error=>console.log(error)
        )
      },
      error=>{
        console.log(error);
      }
    )
  }
  
  irAtras(){
    this.regionVisible = "ordenes";
    this.onOrdenes.emit({url:this.regionVisible,data:"data"});
  }
  verOrdenTomada(data:any){
    this.regionVisible = "detalleOrdenEntregada";
    this.onOrdenes.emit({url:this.regionVisible,data:data});
  }
}
