// iniciando o servidor
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Mongoose conexao com o banco de dados
mongoose.connect("mongodb://localhost/cartaoponto")
    .then(() => {
        console.log("Conectado ao mongo");
    })
    .catch((err) => {
        console.log("Erro ao se conectar:" + err);
    });

//definido a rota do css
app.use("static", express.static("public"));

//setando a extensão ejs
app.set("view engine", "ejs");

//chamando o model de usuarios
const Usuario = require("")

//metodo get
app.get("/", (req, res) => {
    res.render("cadusuario");
});

app.post('/', async(req, res) => {
    const usuario = new Usuario({
        matricula: req.body.matricula
            // senha: req.body.senha,
            // eAdmin: req.body.eAdmin
    })
    console.log(usuario.matricula + " " + usuario.senha + ' ' + usuario.eAdmin)
})

app.listen(8080, () => console.log("Servidor online"));