import { Component, OnInit, Output } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { DetalleCarrito } from 'src/app/models/detalle-carrito';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Output () pasarData:EventEmitter <number> = new EventEmitter()

  Items: DetalleCarrito[] = [];
  total: number = 0;
  constructor(private productosService: ProductosService,
    private carritosService: CarritoService) { }

  ngOnInit() {
    this.carritosService.get().subscribe((res:Carrito[]) =>{
      this.Items = res[0].detallesCarrito;
    })

    var tot = 0;
    this.Items.forEach(function (item) {
      tot += item.producto.precioUnitario * item.cantidad 
    });
    this.total = tot + 100;
    this.pasarData.emit(this.total);
  }
  
  sumarItems(){
    var cantItems = this.Items.length;
    (document.getElementById("cantItems") as HTMLElement).innerHTML = "Mi carrito (" + cantItems + " items)"
  }

  eliminarItem(item: DetalleCarrito){
    var pos = this.Items.indexOf(item);
    
    this.Items.splice(pos, 1);
    this.total -= item.producto.precioUnitario * item.cantidad;
    
    (document.getElementsByClassName("precioTot").item(0) as HTMLElement).innerText = "$" + this.total;
    this.pasarData.emit(this.total);
  }

}
