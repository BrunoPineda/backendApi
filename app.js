// app.js

const express = require("express");
const app = express();

// Configurar rutas
const routes = require("./routes/index");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
