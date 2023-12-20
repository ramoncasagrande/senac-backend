const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true

    }
})

const Aluno = mongoose.model("Aluno", AlunoSchema)

module.exports = Aluno;