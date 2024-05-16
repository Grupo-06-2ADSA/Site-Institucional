var maquinaModel = require("../models/maquinaModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var hostname = req.body.hostNameServer;
    var ipv4 = req.body.ipv4Server;
    var dtImagem = req.body.imagemServer;
    let fkSala = req.body.fkSalaServer;
    let fkEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (hostname == undefined) {
        res.status(400).send("Seu hostname está undefined!");
    } else if (ipv4 == undefined) {
        res.status(400).send("Seu ipv4 está undefined!");
    } else if (dtImagem == undefined) {
        res.status(400).send("Sua imagem está undefined!");
    } else if (fkSala == undefined) {
        res.status(400).send("Sua fkSala está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        maquinaModel.cadastrar(hostname, ipv4, dtImagem, fkSala, fkEmpresa)
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

function verificarFkSala(req, res) {
    let nomeSala = req.body.nomeSalaServer;
    let fkEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (nomeSala == undefined) {
        res.status(400).send("Seu fkSala está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Seu fkEmpresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        maquinaModel.verificarFkSala(nomeSala, fkEmpresa)
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

function buscarMaquinas(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    maquinaModel.buscarMaquinas(fkEmpresa)
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

function numMaquinas(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer

    maquinaModel.numMaquinas(fkEmpresa)
        .then((resultado) => {

            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length == 1) {
                // res.status(200).json(resultado);
                console.log(resultado);

                res.json({
                    numMaquinas: resultado[0].numMaquinas
                });

            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    verificarFkSala,
    buscarMaquinas,
    numMaquinas
}