import { Domicilio } from "./domicilio";

export class LocalAdherido{
    nombre: string;
    domicilio: Domicilio;
    fechaAlta: Date;


    constructor(nombre: string, domicilio: Domicilio, fechaAlta: Date)
    {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.fechaAlta = fechaAlta;
    }
}