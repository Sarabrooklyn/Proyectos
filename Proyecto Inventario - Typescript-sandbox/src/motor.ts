import { Producto } from "./modelo";
import { inventario, fresas } from "./informacion";

export const agregarProductoAlInventario = (array: Producto[], producto : Producto) => {
    return array.push(producto);
}

agregarProductoAlInventario(inventario, fresas);

console.log(inventario);

const tieneSuficienteStock = (producto: Producto, cantidadCambio: number): boolean => {
    return producto.cantidad + cantidadCambio >= 0;
  }

  
export const actualizarCantidadDeCadaProducto = (nombreProducto: string, cantidadCambio: number): void => {
    
    const producto = inventario.find(producto => producto.nombre === nombreProducto);
  
     if (!producto) {
        console.log("producto no encontrado");
        return;
        }    

     if (cantidadCambio < 0 && !tieneSuficienteStock(producto, cantidadCambio)) {
        console.log(`No hay suficiente stock de ${nombreProducto}.`);
        return;
        }
    
    producto.cantidad += cantidadCambio;
    console.log(`Cantidad de ${nombreProducto} actualizada a ${producto.cantidad}.`);
    }
    

  actualizarCantidadDeCadaProducto("fresa", 10);
  actualizarCantidadDeCadaProducto("plátano", -150);
  console.log(inventario);

  export const filtrarProductosCategoria = (array : Producto[], categoria : string) => {
    return array.filter((producto) => producto.categoria.toLowerCase() === categoria);
  }


  const mostrarProductosAgotados = (array : Producto[]) => {
    const productosAgotados = array.filter((producto) => producto.cantidad === 0);

    if (productosAgotados.length === 0){
      console.log("No hay productos agotados");
      return;
    }
    console.log(`Los siguientes productos están agotados: ${productosAgotados.map(producto => producto.nombre).join(", ")}`);
  }

mostrarProductosAgotados(inventario);

const valorTotalInventario = (array : Producto[]) => {
    const total = array.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    return Math.round(total *100) / 100;
}

actualizarCantidadDeCadaProducto("fresa", 0);
mostrarProductosAgotados(inventario);

console.log(inventario);
console.log(valorTotalInventario(inventario));