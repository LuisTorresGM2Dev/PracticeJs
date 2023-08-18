
window.onload = function(){
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



function login () {
  const Username = document.querySelector('#Username');
  const Password = document.querySelector('#Password');
  
  for (let intentos = 1; intentos <= 3; intentos++) {
    if (Username.value == User.Username && Password.value == User.Password) {
      console.log("logged in");
      return true;
    }
    else {
      console.log("attempt failed, try again")
    }
  }
  return false;
};

const buttonLogin = document.querySelector('#button')
buttonLogin.addEventListener('click', () => {
  login();
})

// main();

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
}