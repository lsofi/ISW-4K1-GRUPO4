import { Producto } from "./producto";

export class DetalleCarrito{
    producto: Producto 
    cantidad : number 
    nota: string

    constructor(producto:Producto, cantidad:number, nota:string = '')
    {
        this.producto = producto;
        this.cantidad = cantidad;
        this.nota = nota;
    }

}

    