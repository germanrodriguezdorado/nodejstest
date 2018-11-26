const express = require("express");
const morgan = require("morgan");
const app = express();


// settings
app.set("name", "HOLA MUNDO APP");


// middlewares
app.use(morgan("dev"));


// rutas
app.get("/login", (req, res) => {
 res.end("<h1>Este es el login</h1>");
});

app.listen(3000, () => console.log("Servidor de '" + app.get("name") + "' levantado!"));
