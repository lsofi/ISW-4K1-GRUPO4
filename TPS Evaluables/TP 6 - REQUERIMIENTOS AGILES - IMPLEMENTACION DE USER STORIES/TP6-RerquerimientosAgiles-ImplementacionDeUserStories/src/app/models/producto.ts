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
    //{idProducto: 2, nombre: "Empanada", precioUnitario: 52, descripcion: "Fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce y cocida al horno o frita", img: ""},
    {idProducto: 3, nombre: "Lomito", precioUnitario: 350, descripcion: "sándwich típico de la gastronomía argentina, compuesto por lonchas delgadas de lomito y otros ingredientes", img: "https://www.hoydia.com.ar/images/2021/04-Abril/Gastronomia/lomito-jmjpg.jpg"},
    //{idProducto: 4, nombre: "Fajita", precioUnitario: 125, descripcion: "Consiste en carne asada a la parrilla y cortada en tiras, servida sobre una tortilla de harina de maíz o harina de trigo", img: ""},
    //{idProducto: 5, nombre: "Wrap", precioUnitario: 320, descripcion: "Incluye rellenos típicos de sándwich envueltos en una tortilla, pita, lavash u otro pan plano blando", img: ""},
    {idProducto: 6, nombre: "Gohan", precioUnitario: 550, descripcion: "Arroz blanco cocido con otros ingredientes, proveniente de la comida japones", img: "https://entrepalitos.com/wp-content/uploads/2020/10/IMG_20201009_173837.jpg"},
    //{idProducto: 7, nombre: "Sushi", precioUnitario: 750, descripcion: "arroz aderezado con vinagre de arroz, azúcar y sal y combinado con otros ingredientes como pescados crudos, mariscos, verduras, etc", img: ""},
    //{idProducto: 8, nombre: "Ramen", precioUnitario: 650, descripcion: "Consiste en fideos japoneses servidos en un caldo preparado a base de hueso de cerdo o pollo y distintas verduras, su sabor varía entre la pasta de miso, salsa de soya o sal, contiene diferentes guarniciones como rebanadas de carne de cerdo, algas menmay cebolleta", img: ""},
    // {idProducto: 9, nombre: "Chow fan", precioUnitario: 400, descripcion: "Elaborado de carne de vaca o ternera stir-frying con hefen y brotes de soj", img: ""},
    // {idProducto: 10, nombre: "Tarteleta", precioUnitario: 350, descripcion: "Base elaborada de recortes de hojaldre.​ Horneadas con legumbres secas, cuyo peso evita que el fondo se hinche y mantenga la forma cóncava de la mas", img: ""},
    // {idProducto: 11, nombre: "Espagueti", precioUnitario: 500, descripcion: "Pasta italiana elaborada con harina de grano duro y agu", img: ""},
    // {idProducto: 12, nombre: "Ravioles", precioUnitario: 450, descripcion: "Pasta italiana rellena con diferentes ingredientes, generalmente replegada en forma cuadrada. Se acompañan de algún tipo de salsa, en especial de tomate, tucos, pesto o cremas", img: ""},
    // {idProducto: 13, nombre: "Canelones", precioUnitario: 425, descripcion: "Pasta ancha de forma rectangular que se emplea a menudo en la cocina italiana para hacer platos con carne picada, pescado, atún a ser posible, verdura, requesón y espinacas o incluso pescado en su interio", img: ""},
    //{idProducto: 15, nombre: "Hamburguesa", precioUnitario: 400, descripcion: "Sándwich hecho a base de carne molida, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse", img: "https://10619-2.s.cdn12.com/rests/original/403_503218102.jpg"},
    // {idProducto: 16, nombre: "Milanesa de carne", precioUnitario: 275, descripcion: "" , img: ""},
    // {idProducto: 17, nombre: "Milanesa de pollo", precioUnitario: 260, descripcion: "", img: ""},
    // {idProducto: 18, nombre: "Milanesa de berenjenas", precioUnitario: 220, descripcion: "", img: ""},
    // {idProducto: 19, nombre: "Hamburguesa vegetariana", precioUnitario: 300, descripcion: "Sándwich hecho a base de carne de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornears", img: ""},
    // {idProducto: 20, nombre: "Lomito vegetariano", precioUnitario: 250, descripcion: "Filete, normalmente de carne vacuna, rebozado, que se cocina frito o al horno", img: ""},
    // {idProducto: 21, nombre: "Empanada vegetariana", precioUnitario: 60, descripcion: "Fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce y cocida al horno o frit", img: ""},
    // {idProducto: 22, nombre: "Sopa", precioUnitario: 300, descripcion: "Preparación culinaria que consiste en un líquido con sustancia y sabo", img: ""},
    // {idProducto: 23, nombre: "Paella", precioUnitario: 700, descripcion: "Receta de cocina con base de arroz, con origen en la actual Comunidad Valenciana, hoy en día muy popular en toda España y servida en restaurantes de todo el mundo", img: ""}
  ];