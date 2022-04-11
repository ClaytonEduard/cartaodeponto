// iniciando o servidor
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//definido a rota do css
app.use("static", express.static("public"));

//setando a extensão ejs
app.set("view engine", "ejs");
//app.set("view engine", "handlebars");

//chamando o model de usuarios
const UsuarioSchema = require("./models/Usuario")

//metodo get
app.get("/", (req, res) => {
    res.render("cadusuario");
});

app.post('/', async(req, res) => {
    const Usuario = new Usuario({

    })
})

app.listen(8080, () => console.log("Servidor online"));