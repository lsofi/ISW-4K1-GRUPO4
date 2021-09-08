import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-envio-pedido',
  templateUrl: './envio-pedido.component.html',
  styleUrls: ['./envio-pedido.component.css']
})
export class EnvioPedidoComponent implements OnInit {

  ciudades: Ciudad[] = [];
  constructor(private ciudadService: CiudadService) { }

  ngOnInit(){
    this.getCiudades();
  }

  getCiudades(){
    this.ciudadService.get().subscribe((res:Ciudad[])=>{
      this.ciudades = res;
    })
  }

}
