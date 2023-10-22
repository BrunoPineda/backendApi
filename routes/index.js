const express = require("express");
const router = express.Router();
const connectToDB = require("../config/db");
const productosController = require("../controllers/productosController");
const proveedoresController = require("../controllers/proveedoresController");

// Ruta para obtener todos los productos
router.get("/productos", async (req, res) => {
  const db = await connectToDB();
  const productos = await productosController.obtenerTodosLosProductos(db);
  res.json(productos);
});

// Ruta para obtener un producto por su ID
router.get("/productos/:id", async (req, res) => {
  const db = await connectToDB();
  const producto = await productosController.obtenerProductoPorID(
    db,
    req.params.id
  );
  res.json(producto);
});

// Ruta para crear un nuevo producto
router.post("/productos", async (req, res) => {
  const { nombre, precio, proveedor_id } = req.body;
  const db = await connectToDB();
  const nuevoProductoID = await productosController.crearProducto(
    db,
    nombre,
    precio,
    proveedor_id
  );
  res.json({ message: "Producto creado exitosamente", nuevoProductoID });
});

// Ruta para actualizar un producto por su ID
router.put("/productos/:id", async (req, res) => {
  const { nombre, precio, proveedor_id } = req.body;
  const db = await connectToDB();
  const resultado = await productosController.actualizarProducto(
    db,
    req.params.id,
    { nombre, precio, proveedor_id }
  );
  res.json({ message: `Se actualizó ${resultado} producto(s)` });
});

// Ruta para eliminar un producto por su ID
router.delete("/productos/:id", async (req, res) => {
  const db = await connectToDB();
  const resultado = await productosController.eliminarProducto(
    db,
    req.params.id
  );
  res.json({ message: `Se eliminó ${resultado} producto(s)` });
});

// Ruta para obtener todos los proveedores
router.get("/proveedores", async (req, res) => {
  const db = await connectToDB();
  const proveedores = await proveedoresController.obtenerTodosLosProveedores(
    db
  );
  res.json(proveedores);
});

// Ruta para obtener un proveedor por su ID
router.get("/proveedores/:id", async (req, res) => {
  const db = await connectToDB();
  const proveedor = await proveedoresController.obtenerProveedorPorID(
    db,
    req.params.id
  );
  res.json(proveedor);
});

// Ruta para crear un nuevo proveedor
router.post("/proveedores", async (req, res) => {
  const { nombre_proveedor, telefono, direccion } = req.body;
  const db = await connectToDB();
  const nuevoProveedorID = await proveedoresController.crearProveedor(
    db,
    nombre_proveedor,
    telefono,
    direccion
  );
  res.json({ message: "Proveedor creado exitosamente", nuevoProveedorID });
});

// Ruta para actualizar un proveedor por su ID
router.put("/proveedores/:id", async (req, res) => {
  const { nombre_proveedor, telefono, direccion } = req.body;
  const db = await connectToDB();
  const resultado = await proveedoresController.actualizarProveedor(
    db,
    req.params.id,
    { nombre_proveedor, telefono, direccion }
  );
  res.json({ message: `Se actualizó ${resultado} proveedor(es)` });
});

// Ruta para eliminar un proveedor por su ID
router.delete("/proveedores/:id", async (req, res) => {
  const db = await connectToDB();
  const resultado = await proveedoresController.eliminarProveedor(
    db,
    req.params.id
  );
  res.json({ message: `Se eliminó ${resultado} proveedor(es)` });
});

module.exports = router;
