import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-envio-pedido',
  templateUrl: './envio-pedido.component.html',
  styleUrls: ['./envio-pedido.component.css'],
})
export class EnvioPedidoComponent implements OnInit {
  tarjetaForm: FormGroup;
  debitoForm: FormGroup;

  ciudades: Ciudad[] = [];
  constructor(private ciudadService: CiudadService) {
    this.tarjetaForm = new FormGroup({
      numeroTarjeta: new FormControl('', [
        Validators.required,
        Validators.pattern('4[0-9]+$'),
        Validators.minLength(16),
      ]),
      fechaVencimiento: new FormControl('', [Validators.required, Validators.pattern(
        '(0[1-9]|1[012])[-/](20)[0-9]{2}'
      ),
      Validators.min(Date.now())] ),
      numeroCVVD: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(3),
      ]),
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$'),
      ]),
    });
    this.debitoForm = new FormGroup({
      monto: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.min(1678)
      ]),
    })
  }

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades() {
    this.ciudadService.get().subscribe((res: Ciudad[]) => {
      this.ciudades = res;
    });
  }
}
