// models/productos.js

class Producto {
  constructor(nombre, precio, proveedor_id) {
    this.nombre = nombre;
    this.precio = precio;
    this.proveedor_id = proveedor_id;
  }
}

module.exports = Producto;
