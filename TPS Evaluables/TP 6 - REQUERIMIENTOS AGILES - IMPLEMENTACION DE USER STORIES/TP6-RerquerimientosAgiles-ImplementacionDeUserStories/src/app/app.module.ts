import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomicilioComponent } from './components/domicilio/domicilio.component';
import { PagoComponent } from './components/pago/pago.component';
import { EnvioPedidoComponent } from './components/envio-pedido/envio-pedido.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DomicilioComponent,
    PagoComponent,
    EnvioPedidoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
