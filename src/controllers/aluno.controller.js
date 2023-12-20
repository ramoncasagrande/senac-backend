const alunoService = require('../services/aluno.service')

const post = async (req, res) => {
    const { email, nome } = req.body;

    if(!email || !nome){
        res.status(400).send({message:'preencha os campos corretamente'});
    }

    const aluno = await alunoService.post(req.body);

    if(!aluno){
        return res.status(400).send({message: "Erro na criação do Aluno"});
    }

    res.status(200).send({
        message: "Aluno cadastrado com sucesso",
        aluno: {
            email,
            nome
        }
    })
}

module.exports = { post };