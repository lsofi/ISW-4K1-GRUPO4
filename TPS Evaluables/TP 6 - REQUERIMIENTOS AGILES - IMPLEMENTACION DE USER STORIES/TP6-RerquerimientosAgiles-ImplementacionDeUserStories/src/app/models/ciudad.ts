export class Ciudad{
    idCiudad: number;
    nombre: string;

    constructor(idCiudad: number, nombre: string)
    {
        this.idCiudad = idCiudad;
        this.nombre = nombre;
    }
}

export const ciudades: Ciudad[] = 
[
    {idCiudad: 1, nombre: 'Cordoba Capital'},
    {idCiudad: 2, nombre: 'Rio Primero'},
    {idCiudad: 3, nombre: 'Villa Carlos Paz'},
]