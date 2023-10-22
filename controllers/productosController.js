const Producto = require("../models/productos");

async function obtenerTodosLosProductos(db) {
  const productos = await db.collection("productos").find({}).toArray();
  return productos;
}

async function obtenerProductoPorID(db, id) {
  const producto = await db
    .collection("productos")
    .findOne({ _id: new ObjectId(id) });
  return producto;
}

async function crearProducto(db, nombre, precio, proveedor_id) {
  const nuevoProducto = new Producto(nombre, precio, proveedor_id);
  const resultado = await db.collection("productos").insertOne(nuevoProducto);
  return resultado.insertedId;
}

async function actualizarProducto(db, id, nuevosDatos) {
  const resultado = await db
    .collection("productos")
    .updateOne({ _id: new ObjectId(id) }, { $set: nuevosDatos });
  return resultado.modifiedCount;
}

async function eliminarProducto(db, id) {
  const resultado = await db
    .collection("productos")
    .deleteOne({ _id: new ObjectId(id) });
  return resultado.deletedCount;
}

module.exports = {
  obtenerTodosLosProductos,
  obtenerProductoPorID,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
