import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad';
import { DetalleCarrito } from 'src/app/models/detalle-carrito';
import { CiudadService } from 'src/app/services/ciudad.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-envio-pedido',
  templateUrl: './envio-pedido.component.html',
  styleUrls: ['./envio-pedido.component.css'],
})
export class EnvioPedidoComponent implements OnInit {
  tarjetaForm: FormGroup;
  efectivoForm: FormGroup;
  direccionForm: FormGroup;
  horarioForm: FormGroup;
  Total: number;

  ciudades: Ciudad[] = [];
  constructor(private ciudadService: CiudadService) {
    this.tarjetaForm = new FormGroup({
      numeroTarjeta: new FormControl('', [
        Validators.required,
        Validators.pattern('4[0-9]+$'),
        Validators.minLength(16),
      ]),
      fechaVencimiento: new FormControl('', [
        Validators.required,
        Validators.pattern('(0[1-9]|1[012])[-/](20)[0-9]{2}')
      ]),
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
    this.efectivoForm = new FormGroup({
      monto: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.min(0),
      ]),
    });
    this.direccionForm = new FormGroup({
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
      ]),
      calle: new FormControl('', [Validators.required]),
      numero: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
    });
    (this.horarioForm = new FormGroup({
      Fecha: new FormControl('', [Validators.required]),
      Hora: new FormControl('', [Validators.required]),
    })),
      (this.Total = 0);
  }

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades() {
    this.ciudadService.get().subscribe((res: Ciudad[]) => {
      this.ciudades = res;
    });
  }

  guardarDireccion() {
    const calle = (document.getElementById('calle') as HTMLInputElement).value;
    console.log(calle);
    const numero = (document.getElementById('numero') as HTMLInputElement)
      .value;
    console.log(numero);
    const ciudad = (document.getElementById('ciudad') as HTMLSelectElement)
      .value;
    console.log(ciudad);
    var direccion = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA1CXSj3gyAhTnTgFAAauVkXsxHFq9ZiM8&q=${calle} ${numero} ${ciudad} Argentina`;
    (document.getElementById('mapa') as HTMLIFrameElement).src = direccion;
  }

  mostrarMapa() {
    (document.getElementById('mapa') as HTMLIFrameElement).style.display = '';
  }

  enviar() {

    var tarjetaCheck = document.getElementById(
      'tarjetaButton'
    ) as HTMLInputElement;
    var fechahorapersoButtonCheck = document.getElementById(
      'fecha-hora-persoButton'
    ) as HTMLInputElement;

    const tarjetaCopy = { ...this.tarjetaForm.value };
    const horarioCopy = { ...this.horarioForm.value };

    var valido = true;

    var botonModal = (document.getElementById("btnEnviar") as HTMLElement);

    valido = this.validarForms();
    console.log(valido);

    var ahora = new Date();

    if(tarjetaCheck.checked){
      var fechaVencimiento = tarjetaCopy.fechaVencimiento.split('/');
      var vencimientoTarjeta = new Date(
        fechaVencimiento[1],
        fechaVencimiento[0] - 1
      );
    

      if (ahora > vencimientoTarjeta) valido = false;
    }

    console.log(valido);

    if(fechahorapersoButtonCheck.checked){
      var horaEntrega = horarioCopy.Hora + ' ' + horarioCopy.Fecha;

      var fechaEntrega = new Date(horaEntrega);

      if (
        fechaEntrega < this.agregarHoras(ahora, 1) ||
        fechaEntrega > this.agregarDias(ahora, 7)
      ){
        valido = false;
        
      }     
    }
    console.log(valido);

    if(this.Total == 100) valido = false;
    console.log(valido);

    if(!valido){
      (document.getElementById("error") as HTMLDivElement).style.display = "block";
    }
    else{
      (document.getElementById("confirmacion") as HTMLDivElement).style.display = "block";
    }
    

    this.mostrarDatos();
  }

  agregarHoras(fecha: Date, horas: number) {
    var milisegundos = fecha.getTime();
    var agregarMs = horas * 60 * 60 * 1000;
    return new Date(milisegundos + agregarMs);
  }

  agregarDias(fecha: Date, dias: number) {
    var milisegundos = fecha.getTime();
    var agregarMs = dias * 24 * 60 * 60 * 1000;
    return new Date(milisegundos + agregarMs);
  }

  validarForms() {
    var tarjetaCheck = document.getElementById(
      'tarjetaButton'
    ) as HTMLInputElement;
    var efectivoCheck = document.getElementById(
      'efectivoButton'
    ) as HTMLInputElement;
    var fechahorapersoButtonCheck = document.getElementById(
      'fecha-hora-persoButton'
    ) as HTMLInputElement;
    var ahoraCheck = document.getElementById('ahora') as HTMLInputElement;

    return (
      ((this.tarjetaForm.valid && tarjetaCheck.checked) ||
        (this.efectivoForm.valid && efectivoCheck.checked)) &&
      this.direccionForm.valid &&
      ((this.horarioForm.valid && fechahorapersoButtonCheck.checked) ||
        ahoraCheck.checked)
    );
  }

  mostrarDatos() {
    var calle = (document.getElementById('calle') as HTMLInputElement).value;
    var numero = (document.getElementById('numero') as HTMLInputElement).value;
    var ciudad = (document.getElementById('ciudad') as HTMLSelectElement).value;
    var direccion = calle + ' ' + numero + ', ' + ciudad;
    (
      document.getElementById('direccionConfirmada') as HTMLParagraphElement
    ).innerText = 'Tu pedido llegará a ' + ' ' + direccion;

    var fecha = (document.getElementById('fecha') as HTMLInputElement).value;
    (document.getElementById('diaEntrega') as HTMLParagraphElement).innerText =
      'El día ' + ' ' + fecha;

    var hora = (document.getElementById('hora') as HTMLInputElement).value;
    (document.getElementById('horaEntrega') as HTMLParagraphElement).innerText =
      'Alrededor de las ' + ' ' + hora;
  }

  ocultarEfectivo() {
    (document.getElementById('efectivo') as HTMLDivElement).style.display =
      'none';
    (document.getElementById('tarjeta') as HTMLDivElement).style.display = '';
    this.efectivoForm.reset();
  }

  ocultarTarjeta() {
    (document.getElementById('tarjeta') as HTMLDivElement).style.display =
      'none';
    (document.getElementById('efectivo') as HTMLDivElement).style.display = '';
    this.tarjetaForm.reset();
  }

  ocultarPersonalizado() {
    (
      document.getElementById('fecha-hora-perso') as HTMLDivElement
    ).style.display = 'none';
    this.horarioForm.reset;
  }

  mostrarPersonalizado() {
    (
      document.getElementById('fecha-hora-perso') as HTMLDivElement
    ).style.display = '';
  }

  pasarData(data: any) {
    this.Total = data;
    this.efectivoForm.controls['monto'].setValidators(
      Validators.min(this.Total)
    );
    this.efectivoForm.controls['monto'].reset();
  }

  errorModal(mensaje: string){

  }

  cerrarModal(){
    (document.getElementById("error") as HTMLDivElement).style.display = "none";
    (document.getElementById("confirmacion") as HTMLDivElement).style.display = "none";
  }

}
