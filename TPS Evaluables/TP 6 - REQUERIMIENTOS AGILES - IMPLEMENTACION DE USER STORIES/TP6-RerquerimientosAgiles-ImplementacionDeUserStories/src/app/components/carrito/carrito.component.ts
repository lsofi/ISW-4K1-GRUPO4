import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { DetalleCarrito } from 'src/app/models/detalle-carrito';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  Items: DetalleCarrito[] = [];
  constructor(private productosService: ProductosService,
    private carritosService: CarritoService) { }

 /* ngOnInit() {
    this.productosService.get().subscribe((res:Producto[]) =>{
      this.Items = res;
    })
  }*/
  ngOnInit() {
    this.carritosService.get().subscribe((res:Carrito[]) =>{
      this.Items = res[0].detallesCarrito;
    })
  }



  sumarItems(){
    var cantItems = this.Items.length;
    (document.getElementById("cantItems") as HTMLElement).innerHTML = "Mi carrito (" + cantItems + " items)"
    console.log(cantItems);
  }


}
