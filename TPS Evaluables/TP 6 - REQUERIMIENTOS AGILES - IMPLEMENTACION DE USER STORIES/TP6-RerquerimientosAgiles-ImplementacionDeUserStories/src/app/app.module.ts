import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { EnvioPedidoComponent } from './envio-pedido/envio-pedido.component';



@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    EnvioPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }