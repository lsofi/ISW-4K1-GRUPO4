import { Component, Input, OnInit } from '@angular/core';
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
    const numero = (document.getElementById('numero') as HTMLInputElement)
      .value;
    const ciudad = (document.getElementById('ciudad') as HTMLSelectElement)
      .value;
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

    if(!this.validarForms()){
      valido = false;
      var msj = "Verifique los datos ingresados";
      this.errorModal(msj);
    }

    var ahora = new Date();

    if(tarjetaCheck.checked){
      var fechaVencimiento = tarjetaCopy.fechaVencimiento.split('/');
      var vencimientoTarjeta = new Date(
        fechaVencimiento[1],
        fechaVencimiento[0] - 1
      );
    

      if (ahora > vencimientoTarjeta){
        valido = false;
        this.errorModal("Su tarjeta está vencida");
      }
    }

    if(fechahorapersoButtonCheck.checked){
      var horaEntrega = horarioCopy.Hora + ' ' + horarioCopy.Fecha;

      var fechaEntrega = new Date(horaEntrega);

      if (
        fechaEntrega < this.agregarHoras(ahora, 1) ||
        fechaEntrega > this.agregarDias(ahora, 7) || !this.validarHorario(fechaEntrega)
      ){
        valido = false;
        this.errorModal("Hora de entrega no válida");
      }     
    }

    if(this.Total == 100){
      valido = false;
      this.errorModal("No hay productos en el carrito");
      
    }

    if(!this.validarTarjeta()){
      valido = false;
      this.errorModal("Su Visa no ha sido aceptada")
    }

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

    var fechahorapersoButtonCheck = document.getElementById(
      'fecha-hora-persoButton'
    ) as HTMLInputElement;
    
    var ahora = new Date();
    ahora = this.agregarHoras(ahora,1);

    var calle = (document.getElementById('calle') as HTMLInputElement).value;
    var numero = (document.getElementById('numero') as HTMLInputElement).value;
    var ciudad = (document.getElementById('ciudad') as HTMLSelectElement).value;
    var direccion = calle + ' ' + numero + ', ' + ciudad;
    (
      document.getElementById('direccionConfirmada') as HTMLParagraphElement
    ).innerHTML = 'Tu pedido llegará a ' + ' ' + '<strong>' + direccion + '</strong>';

    if (fechahorapersoButtonCheck.checked){
    var fecha = ((document.getElementById('fecha') as HTMLInputElement).value).split('-');
    (document.getElementById('diaEntrega') as HTMLParagraphElement).innerHTML =
      'El día' + ' ' + '<strong>' + fecha[2] + '/' + fecha[1] + '/' + fecha[0] + '</strong>';

    var hora = (document.getElementById('hora') as HTMLInputElement).value;
    (document.getElementById('horaEntrega') as HTMLParagraphElement).innerHTML =
      'Alrededor de las ' + ' ' + + '<strong>' + hora + '</strong>';
    }
    else{
      var dia = ahora.getDate();
      var mes = ahora.getMonth();
      var año = ahora.getFullYear();
      var horaYa = ahora.getHours();
      var minutos = ahora.getMinutes();

      (document.getElementById('diaEntrega') as HTMLParagraphElement).innerHTML =
      'El día' + ' ' +  '<strong>' + dia + '/' + (mes +1) + '/' + año + '</strong>';

      (document.getElementById('horaEntrega') as HTMLParagraphElement).innerHTML =
      'Alrededor de las ' + ' ' +  '<strong>' + horaYa + ":" + ((minutos<10?'0':'') + minutos)+ '</strong>';
    }
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
    this.efectivoForm.controls['monto'].setValidators([Validators.required,
      Validators.pattern('^[0-9]+$'),
      Validators.min(this.Total)]
    );
    this.efectivoForm.reset();
  }

  errorModal(mensaje: string){
    (document.getElementById("msjError") as HTMLParagraphElement).innerHTML = mensaje;
  }

  cerrarModal(){
    (document.getElementById("error") as HTMLDivElement).style.display = "none";
    (document.getElementById("confirmacion") as HTMLDivElement).style.display = "none";
  }

  validarTarjeta(){
    return true;
  }

  validarHorario(fecha: Date){
    var hora = fecha.getHours()
    return (hora >= 8)
  }

}
