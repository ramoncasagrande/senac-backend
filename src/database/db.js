const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Aguardando conexão...");
    mongoose.connect('mongodb://127.0.0.1:27017/senac').then(() => {console.log("MongoDB Conectado!")})
    .catch((erro) => {console.log(erro)});
}

module.exports = connectDatabase;