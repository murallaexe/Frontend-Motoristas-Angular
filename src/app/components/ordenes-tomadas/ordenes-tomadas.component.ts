import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MotoristaService } from 'src/app/service/motorista.service';

@Component({
  selector: 'app-ordenes-tomadas',
  templateUrl: './ordenes-tomadas.component.html',
  styleUrls: ['./ordenes-tomadas.component.css']
})
export class OrdenesTomadasComponent implements OnInit {
  @Output() onVerDetalleOrdenTomada = new EventEmitter();
  idMotorista:any="";
  regionVisible:any=""
  ordenesTomadas:any=[]
  constructor(
    private motoristaService:MotoristaService,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
      this.authService.authe(localStorage.getItem('token')).subscribe(
        res=>{
          // console.log(res);
          this.idMotorista=res.authData.data._id;
          this.motoristaService.obtenerInformacionMotorista(this.idMotorista).subscribe(
            result=>{
              var indice=0;
              for(var i=0;i<result.ordenes.length;i++){
                if(result.ordenes[i].estadoOrden!='destino'){
                  this.ordenesTomadas[indice]=result.ordenes[i];
                  indice=indice+1;
                }
              }
              // console.log(this.ordenesTomadas.length);
              localStorage.setItem('CountOT',this.ordenesTomadas.length);
            },
            error=>console.log(error)
          )
        },
        error=>{
          console.log(error);
        }
      )
  }

  verOrdenTomada(data:any){
    // console.log('ver Orden con Id', data);
    this.regionVisible = "detalleOrdenTomada";
    this.onVerDetalleOrdenTomada.emit({url:this.regionVisible,data:data});
  }
  irAtras(){
    this.regionVisible = "ordenes";
    this.onVerDetalleOrdenTomada.emit({url:this.regionVisible,data:"data"});
  }
}
