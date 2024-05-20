var estoqueModel = require("../models/estoqueModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    let nome = req.body.nomeComponenteServer;
    let quantidade = req.body.quantidadeServer;
    let precoUnit = req.body.precoServer;
    let fkEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (quantidade == undefined) {
        res.status(400).send("Sua quantidade está undefined!");
    } else if (precoUnit == undefined) {
        res.status(400).send("Seu preço está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estoqueModel.cadastrar(nome, quantidade, precoUnit, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarComponentes(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    let nome = req.body.nomeComponenteServer;
    let quantidade = req.body.quantidadeServer;
    let precoUnit = req.body.precoServer;
    let idComponente = req.body.idComponenteServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (quantidade == undefined) {
        res.status(400).send("Sua quantidade está undefined!");
    } else if (precoUnit == undefined) {
        res.status(400).send("Seu preço está undefined!");
    } else if (idComponente == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estoqueModel.atualizarComponentes(nome, quantidade, precoUnit, idComponente)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function excluirComponente(req, res) {    
    let idComponente = req.body.idComponenteServer;

    // Faça as validações dos valores
    if (idComponente == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estoqueModel.excluirComponente(idComponente)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarComponentes(req, res){
    var fkEmpresa = req.body.fkEmpresaServer;

    estoqueModel.buscarComponentes(fkEmpresa)
        .then((resultado) => {

            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log(resultado);

            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    atualizarComponentes,
    buscarComponentes,
    excluirComponente
}