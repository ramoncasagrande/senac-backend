const teste = (req,res) => {
    const testeGet = 'Teste de GET';

    res.send(testeGet);
}

module.exports = { teste };