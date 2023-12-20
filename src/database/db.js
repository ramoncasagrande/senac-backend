const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Aguardando conexão...");
    mongoose.connect('mongodb://127.0.0.1:27017/senac');
}

module.exports = connectDatabase;