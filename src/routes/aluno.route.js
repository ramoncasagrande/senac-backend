const route = require('express').Router();
const alunoController = require('../controllers/aluno.controller');


route.post('/', alunoController.post);


module.exports = route;