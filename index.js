const express = require("express");
const app = express();
const alunoRoute = require("./src/routes/aluno.route");
const connectDatabase = require("./src/database/db");
const port = 3000;

connectDatabase();
app.use(express.json());
app.use('/aluno', alunoRoute);



app.listen(port, () => {console.log(`Aplicação rodando na porta ${port}`)});