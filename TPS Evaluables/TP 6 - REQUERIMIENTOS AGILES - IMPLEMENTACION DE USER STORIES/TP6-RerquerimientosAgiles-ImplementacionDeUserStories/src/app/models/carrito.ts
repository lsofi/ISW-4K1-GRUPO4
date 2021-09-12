import { DetalleCarrito } from "./detalle-carrito";
import { productos } from "./producto";

export class Carrito{
    detallesCarrito: DetalleCarrito[];
    total: number;

    constructor(detalleCarrito: DetalleCarrito[], total:number)
    {
        this.detallesCarrito = detalleCarrito;
        this.total = total
    }
}
export const carrito: Carrito[] = 
[
    {detallesCarrito: [
        {producto:productos[0], cantidad: 2, nota:''},
        {producto:productos[1], cantidad: 1, nota:''},
        {producto:productos[2], cantidad: 1, nota:''}
    ],
    total: 1000}
]