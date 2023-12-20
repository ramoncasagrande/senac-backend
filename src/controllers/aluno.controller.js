const post = (req, res) => {
    const { email, nome } = req.body;

    if(!email || !nome){
        res.status(400).send({message:'preencha os campos corretamente'});
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