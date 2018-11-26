const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");


// settings
app.set("name", "HOLA MUNDO APP");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));

// rutas
app.use(routes);



app.listen(3000, () => console.log("Servidor de '" + app.get("name") + "' levantado!"));
