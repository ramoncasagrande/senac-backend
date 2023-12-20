const Aluno = require('../models/Alunos');

const post = (body) => Aluno.create(body);

const getAll = () => Aluno.find();

module.exports = { post, getAll } ;