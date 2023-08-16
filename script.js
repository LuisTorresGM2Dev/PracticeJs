
// // function crearProducto (titulo, precio, descuento, imagen, descripcion)
// // {return `
// //   Título: ${titulo}
// //   Precio: $${precio}
// //   Descuento: el descuento es de %${descuento}
// //   Precio con descuento: $${descuentoAplicar}
// //   Hasta 12 cuotas sin descuento: precio de cuota $${calcularCuotas}
// //   Imagen: ${imagen}
// //   Descripción: ${descripcion}
// //   `
// // }
// // function descuentoAplicar(precio, descuento){
// //     Cuenta = (precio*descuento)/100
// //     return` Descuento aplicado: $(cuenta)`
// // }

// // function calcularCuotas(precio){
// //     calcularCuotas = precio/12
// // }

// ////////////////ARRAYS////////////////////

// let producto1 = {
//   nombre: 'PES 2018 - PS4',
//   precio: 6000000
// }
// let producto2 ={
//   nombre: 'FIFA 14 - PS3',
//   precio: 1000
// } 
// let productos =[];
// productos.push(producto1, producto2);
// console.log(productos);

// //////////////////////// USER LOGIN ///////////////////

// let productos =[];

// function crearProducto(titulo, descripcion, precio, imagen){
//   let producto = {
//     titulo,
//     descripcion,
//     precio,
//     imagen,
//   };
//   return producto;
// }

// function subirProductos(producto, array){
//   array.push(producto);
//   return array;
// }
// let garen = {
//   nombre:'Garen',
//   habilidades: ['q','w','r'],
//   admin: true
// };
// function login(usuario){
//   if(usuario.admin){
//     subirProductos(
//     crearProducto('casaca', 'del 10',300, '/img/casacaDel10.png'),
//     productos
//     );
    
//     productos.push(
//     crearProducto('casaca', 'del 10',300, '/img/casacaDel10.png')
//     );
//   }  else{
//     alert('Que haces aca bobo?');
//   }
// }
// login (garen);
// console.log(productos);



//////////////////Login con Prompt//////////////////////


//Credenciales guardadas en la base de datos 
// let Credenciales = {
//   usuario: 'admin',
//   contraseña: '1234'
// };

// Logica de Login{
// function comparation (){
//   for(let x=1; x<= 3; x++){
//     let usuario    = prompt('Ingrese nombre de usuario');
//     let contraseña = prompt('Ingrese contraseña');

//     console.log(usuario);
//     console.log(contraseña);

//     if(usuario == Credenciales.usuario & contraseña == Credenciales.contraseña){

//     console.log('Logueado');
//     return true;

//   } else{
//     console.log('Bloqueado')
//   }
// }
// }
// comparation();

//////////Juego While////////

// let intentos = 0;
// const maxIntentos = 3;
// let numeroUsuario = Number(prompt('¿Qué número tiras?'));
// const numeroSecreto = 7;

// do {
//   if (numeroUsuario === numeroSecreto) {
//     console.log('¡Epa!, le pegaste pa');
//     break;
//   } else {
//     intentos++;
//     if (intentos < maxIntentos) {
//       numeroUsuario = Number(prompt('Ingresá otro número'));
//     } else {
//       console.log('Tas bloqueado pa');
//     }
//   }
// } while (intentos < maxIntentos);

///////// Menu /////////
let products = [];

const User = {
  Username: "admin",
  Password: "1234",
}

function login() {
  for (let intentos = 1; intentos <= 3; intentos++) {
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;

    console.log(Username);
    console.log(Password);

    if (Username == User.Username && Password == User.Password) {
      console.log("logged in");
      return true;
    }
    else {
      console.log("attempt failed, try again")
    }
  }
  return false;
};

main();

function mainMenu() {
  const menu = prompt(`Menú
    [0] - Create a product
    [1] - Show products
    [2] - Go out`
  );

  if (menu == 0) {
    createProduct();
  }

  if (menu == 1) {
    alert("List of products")
    console.log(products);
  }

  if (menu == 2) {
    return false
  }
}

function main() {
  if (login() == true) {
    mainMenu()
  }
}

function createProduct() {
  let product = {
    title: prompt(`Enter the product title`),
    description: prompt(`Enter the product description`),
    price: prompt(`Enter the product price`),
  };
  uploadProducts(product)
  console.log(products);
}

function uploadProducts(product, array) {
  products.push(product);
  const productsJSON = JSON.stringify(products);
  localStorage.setItem(`Products`, productsJSON);
}