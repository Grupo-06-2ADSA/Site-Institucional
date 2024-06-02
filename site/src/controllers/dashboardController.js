var dashboardModel = require("../models/dashboardModel");

function componentesEmFalta(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.componentesEmFalta(fkEmpresa)
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

function manutencoesRecorrentes(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.manutencoesRecorrentes(fkEmpresa)
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

function computadoresReservas(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.computadoresReservas(fkEmpresa)
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

function computadoresInoperantes(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.computadoresInoperantes(fkEmpresa)
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

function computadoresSemLimpeza(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.computadoresSemLimpeza(fkEmpresa)
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

function totalManutencao(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.totalManutencao(fkEmpresa)
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

function totalMes(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.totalMes(fkEmpresa)
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

function qtdManutencoes(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    dashboardModel.qtdManutencoes(fkEmpresa)
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
    componentesEmFalta,
    manutencoesRecorrentes,
    computadoresReservas,
    computadoresInoperantes,
    computadoresSemLimpeza,
    totalManutencao,
    totalMes,
    qtdManutencoes
};