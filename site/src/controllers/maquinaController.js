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

function buscarManutencoes(req, res) {
    var fkMaquina = req.body.hostnameServer;

    maquinaModel.buscarManutencoes(fkMaquina)
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

function excluirMaquina(req, res){
    let hostname = req.body.hostnameServer;

    // Faça as validações dos valores
    if (hostname == undefined) {
        res.status(400).send("Seu hostname está undefined!");
    }
    else {
        maquinaModel.excluirMaquina(hostname)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o delete! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarMaquina(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    let hostname = req.body.hostnameServer;
    let ipv4 = req.body.ipv4Server;
    let dtImagem = req.body.imagemServer;


    // Faça as validações dos valores
    if (hostname == undefined) {
        res.status(400).send("Seu hostname está undefined!");
    } else if (ipv4 == undefined) {
        res.status(400).send("Sua ip está undefined!");
    } else if (dtImagem == undefined) {
        res.status(400).send("Sua imagem está undefined!");
    } else if (hostname == undefined) {
        res.status(400).send("Seu hostname está undefined!");
    }
    else {
        maquinaModel.atualizarMaquina(hostname, ipv4, dtImagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o update! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarManutencao(req, res) {
    var descricao = req.body.descricaoServer;
    var data = req.body.dataServer;
    var tipo = req.body.tipoServer;
    let responsavel = req.body.responsavelServer;
    let fkSala = req.body.fkSalaServer;
    let hostname = req.body.hostnameServer;

    if (descricao == undefined) {
        res.status(400).send("Seu descricao está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Seu data está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Sua tipo está undefined!");
    } else if (responsavel == undefined) {
        res.status(400).send("Sua responsavel está undefined!");
    }else if (fkSala == undefined) {
        res.status(400).send("Sua fkSala está undefined!");
    } else if (hostname == undefined) {
        res.status(400).send("Seu hostname está undefined!");
    }
    else {
        maquinaModel.cadastrarManutencao(data, descricao, tipo, hostname, fkSala, responsavel)
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


module.exports = {
    cadastrar,
    verificarFkSala,
    buscarMaquinas,
    excluirMaquina,
    atualizarMaquina,
    cadastrarManutencao,
    buscarManutencoes
}