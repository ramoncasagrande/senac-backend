const Aluno = require('../models/Alunos');

const post = (body) => Aluno.create(body);

module.exports = { post } ;