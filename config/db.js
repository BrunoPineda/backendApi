// config/db.js

const { MongoClient } = require("mongodb");

//const uri = "mongodb://localhost:27017"; // Cambia la URI si tu MongoDB no está en localhost
const uri =
  "mongodb+srv://bruno:lefdeadosios@cluster0.nsbcn.mongodb.net/?retryWrites=true&w=majority";
const dbName = "tienda"; // Cambia el nombre de la base de datos

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Conexión exitosa a la base de datos");
    return client.db(dbName);
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

module.exports = connectToDB;
