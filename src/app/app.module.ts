import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdenesDisponiblesComponent } from './components/ordenes-disponibles/ordenes-disponibles.component';
import { OrdenesTomadasComponent } from './components/ordenes-tomadas/ordenes-tomadas.component';
import { DetalleOrdenComponent } from './components/detalle-orden/detalle-orden.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { OrdenesEntregadasComponent } from './components/ordenes-entregadas/ordenes-entregadas.component';
import { DetalleOrdenesTomadasComponent } from './components/detalle-ordenes-tomadas/detalle-ordenes-tomadas.component';

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
    DetalleOrdenesTomadasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
