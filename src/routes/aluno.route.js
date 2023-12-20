const route = require('express').Router();
const alunoController = require('../controllers/aluno.controller');


route.get('/', alunoController.teste);


module.exports = route;