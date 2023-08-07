
function crearProducto (titulo, precio, descuento, imagen, descripcion)
{return `
  Título: ${titulo}
  Precio: $${precio}
  Descuento: el descuento es de %${descuento}
  Precio con descuento: $${descuentoAplicar}
  Hasta 12 cuotas sin descuento: precio de cuota $${calcularCuotas}
  Imagen: ${imagen}
  Descripción: ${descripcion}
  `
}
function descuentoAplicar(precio, descuento){
    Cuenta = (precio*descuento)/100
    return` Descuento aplicado: $(cuenta)`
}

function calcularCuotas(precio){
    calcularCuotas = precio/12
}