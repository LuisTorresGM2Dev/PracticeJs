
// function crearProducto (titulo, precio, descuento, imagen, descripcion)
// {return `
//   Título: ${titulo}
//   Precio: $${precio}
//   Descuento: el descuento es de %${descuento}
//   Precio con descuento: $${descuentoAplicar}
//   Hasta 12 cuotas sin descuento: precio de cuota $${calcularCuotas}
//   Imagen: ${imagen}
//   Descripción: ${descripcion}
//   `
// }
// function descuentoAplicar(precio, descuento){
//     Cuenta = (precio*descuento)/100
//     return` Descuento aplicado: $(cuenta)`
// }

// function calcularCuotas(precio){
//     calcularCuotas = precio/12
// }

//////////////////ARRAYS////////////////////

let producto1 = {
  nombre: 'PES 2018 - PS4',
  precio: 6000000
}
let producto2 ={
  nombre: 'FIFA 14 - PS3',
  precio: 1000
} 
let productos =[];
productos.push(producto1, producto2);
console.log(productos);

//////////////////////////USER LOGIN///////////////////
let productos =[];

function crearProducto(titulo, descripcion, precio, imagen){
  let producto = {
    titulo,
    descripcion,
    precio,
    imagen,
  };
  return producto;
}

function subirProductos(producto, array){
  array.push(producto);
  return array;
}
let garen = {
  nombre:'Garen',
  habilidades: ['q','w','r'],
  admin: true
};
function login(usuario){
  if(usuario.admin){
    subirProductos(
    crearProducto('casaca', 'del 10',300, '/img/casacaDel10.png'),
    productos
    );
    
    productos.push(
    crearProducto('casaca', 'del 10',300, '/img/casacaDel10.png')
    );
  }  else{
    alert('Que haces aca bobo?');
  }
}
login (garen);
console.log(productos);
