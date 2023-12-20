const route = require('express').Router();
const alunoController = require('../controllers/aluno.controller');


route.post('/', alunoController.post);
route.get('/', alunoController.get);


module.exports = route;