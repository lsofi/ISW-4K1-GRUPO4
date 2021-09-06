import { Carrito } from "./carrito";
import { Domicilio } from "./domicilio";
import { MetodoPago } from "./metodo-pago";

export class Pedido{
    domicilio: Domicilio;
    metodoPago: MetodoPago;
    carrito : Carrito;
    fechaPedido: Date;
    fechaEntrega: Date;
    monto: number;

    constructor(domicilio: Domicilio, metodo:MetodoPago, carrito: Carrito, fechaPedido: Date, fechaEntrega: Date, monto: number)
    {
        this.domicilio = domicilio;
        this.metodoPago = metodo;
        this.carrito = carrito;
        this.fechaPedido = fechaPedido;
        this.fechaEntrega = fechaEntrega;
        this.monto = monto;
    }
}