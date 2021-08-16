import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdenesDisponiblesComponent } from './components/ordenes-disponibles/ordenes-disponibles.component';
import { OrdenesTomadasComponent } from './components/ordenes-tomadas/ordenes-tomadas.component';
import { DetalleOrdenComponent } from './components/detalle-orden/detalle-orden.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { OrdenesEntregadasComponent } from './components/ordenes-entregadas/ordenes-entregadas.component';
import { DetalleOrdenesTomadasComponent } from './components/detalle-ordenes-tomadas/detalle-ordenes-tomadas.component';
import { FooternavComponent } from './components/footernav/footernav.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { DetalleOrdenesEntregadasComponent } from './components/detalle-ordenes-entregadas/detalle-ordenes-entregadas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OrdenesDisponiblesComponent,
    OrdenesTomadasComponent,
    DetalleOrdenComponent,
    OrdenesComponent,
    OrdenesEntregadasComponent,
    DetalleOrdenesTomadasComponent,
    FooternavComponent,
    DetalleOrdenesEntregadasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
