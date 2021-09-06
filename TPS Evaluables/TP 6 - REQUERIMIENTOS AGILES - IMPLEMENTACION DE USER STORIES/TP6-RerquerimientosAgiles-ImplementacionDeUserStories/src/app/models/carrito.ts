import { DetalleCarrito } from "./detalle-carrito";

export class Carrito{
    detallesCarrito: DetalleCarrito[];
    total: number;

    constructor(detalleCarrito: DetalleCarrito[], total:number)
    {
        this.detallesCarrito = detalleCarrito;
        this.total = total
    }
}