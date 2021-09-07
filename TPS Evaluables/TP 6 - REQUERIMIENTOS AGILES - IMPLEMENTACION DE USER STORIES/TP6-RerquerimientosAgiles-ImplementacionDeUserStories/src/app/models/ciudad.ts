export class Ciudad{
    id: number;
    nombre: string;

    constructor(id: number, nombre: string)
    {
        this.id = id;
        this.nombre = nombre;
    }
}

export const ciudades: Ciudad[] = 
[
    {id: 1, nombre: 'Cordoba Capital'},
    {id: 2, nombre: 'Rio Primero'},
    {id: 3, nombre: 'Villa Carlos Paz'},
]