const express = require("express");
const app = express();
const alunoRoute = require("./src/routes/aluno.route");

app.use('/aluno', alunoRoute);



app.listen(3000);