export class Producto {
  idProducto: number;
  nombre: string;
  precioUnitario: number;
  descripcion: string;
  img: string;
  constructor(
    idProducto: number,
    nombre: string,
    precioUnitario: number,
    descripcion: string,
    img: string
  ) {
    this.idProducto = idProducto;
    this.nombre = nombre;
    this.precioUnitario = precioUnitario;
    this.descripcion = descripcion;
    this.img= img
  }
}

export const productos: Producto[]= [
    {idProducto: 1, nombre: "Pizza", precioUnitario: 250, descripcion: "Pan plano, de forma circular, elaborado con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y queso y se hornea a alta temperatura en un horno de leña.", img: "https://www.mozzarellasanmarino.com.ar/assets/img/portfolio/image10.jpg"},
    {idProducto: 3, nombre: "Lomito", precioUnitario: 350, descripcion: "sándwich típico de la gastronomía argentina, compuesto por lonchas delgadas de lomito y otros ingredientes", img: "https://www.hoydia.com.ar/images/2021/04-Abril/Gastronomia/lomito-jmjpg.jpg"},
    {idProducto: 6, nombre: "Gohan", precioUnitario: 550, descripcion: "Arroz blanco cocido con otros ingredientes, proveniente de la comida japones", img: "https://entrepalitos.com/wp-content/uploads/2020/10/IMG_20201009_173837.jpg"},
  ];