// models/proveedores.js

class Proveedor {
  constructor(nombre_proveedor, telefono, direccion) {
    this.nombre_proveedor = nombre_proveedor;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

module.exports = Proveedor;
