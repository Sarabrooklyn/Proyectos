import { Producto } from "./modelo";
import { agregarProductoAlInventario, filtrarProductosCategoria, actualizarCantidadDeCadaProducto } from "./motor";
import { inventario, tila } from "./informacion";

const crearFilaProducto = (producto: Producto): HTMLTableRowElement => {
    const tr = document.createElement("tr"); // Crear una fila
  
    // Crear celdas para cada propiedad del producto
    const celdaId = document.createElement("td");
    celdaId.textContent = producto.id.toString();
    
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;
    
    const celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = producto.categoria;
    
    const celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = producto.cantidad.toString();
    
    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = producto.precio.toString();
  
    // Agregar las celdas a la fila
    tr.appendChild(celdaId);
    tr.appendChild(celdaNombre);
    tr.appendChild(celdaCategoria);
    tr.appendChild(celdaCantidad);
    tr.appendChild(celdaPrecio);
  
    return tr; // Devolver la fila creada
  };
  
  
  export const mostrarInventario = (inventario: Producto[]) => {
    const divTablaProductos = document.getElementById("tablaProductos");
    if (divTablaProductos && divTablaProductos instanceof HTMLTableElement) {
      const tbody = divTablaProductos.querySelector("tbody");
        if (tbody) {
        tbody.innerHTML = ""; // Limpiar las filas existentes
      }
      // Llenar la tabla con los productos
      inventario.forEach((producto) => {
        const fila = crearFilaProducto(producto); // Crear la fila con el producto
        tbody?.appendChild(fila); // Agregar la fila al cuerpo de la tabla
      });
    }
  };

agregarProductoAlInventario(inventario, tila);
actualizarCantidadDeCadaProducto("tila", 854);
console.log(filtrarProductosCategoria(inventario, "infusiones"));

