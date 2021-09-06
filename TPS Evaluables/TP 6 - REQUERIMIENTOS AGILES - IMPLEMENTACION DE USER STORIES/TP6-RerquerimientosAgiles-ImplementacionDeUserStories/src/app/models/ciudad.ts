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
    {id: 1, nombre: 'Cordoba'},
    {id: 2, nombre: 'Rio Cuarto'},
    {id: 3, nombre: 'Villa Maria'},
    {id: 4, nombre: 'Rio Ceballos'},
    {id: 5, nombre: 'Villa Allende'},
]