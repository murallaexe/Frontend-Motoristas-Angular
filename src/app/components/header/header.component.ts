import { Component, OnInit } from '@angular/core';
import { faTruck,faPowerOff } from '@fortawesome/free-solid-svg-icons'; 
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faTruck = faTruck;
  ocultarLo:boolean=false;
  faPowerOff=faPowerOff;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }
  ocultarLogout(){
    if(this.ocultarLo==true){
      this.ocultarLo=false;
    }else{
     this.ocultarLo=true; 
    };
  }
}
