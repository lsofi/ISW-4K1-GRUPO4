import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  Items: Producto[] = [];
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.get().subscribe((res:Producto[]) =>{
      this.Items = res;
    })
  }

}
