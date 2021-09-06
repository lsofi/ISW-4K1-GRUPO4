import { Ciudad } from "./ciudad";


export class Domicilio{
    calle: string;
    numero: number;
    ciudad: Ciudad;
    referencia: string;

    constructor(calle: string, numero: number, ciudad: Ciudad, referencia: string )
    {
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.referencia = referencia;
    }
}