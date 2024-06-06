var express = require("express");
var router = express.Router();
var maquinaController = require("../controllers/maquinaController");

//Recebendo os dados do html e direcionando para a função cadastrar de maquinaController.js
router.post("/cadastrarMaquina", function (req, res) {
    maquinaController.cadastrar(req, res);
});

router.post("/cadastrarManutencao", function (req, res) {
    maquinaController.cadastrarManutencao(req, res);
});

router.post("/buscarMaquinas", function (req, res) {
    maquinaController.buscarMaquinas(req, res);
});

router.post("/atualizarMaquina", function (req, res) {
    maquinaController.atualizarMaquina(req, res);
});

router.post("/excluirMaquina", function (req, res) {
    maquinaController.excluirMaquina(req, res);
});
router.post("/excluirHistorico", function (req, res) {
    maquinaController.excluirHistorico(req, res);
});

router.post("/buscarManutencoes", function (req, res) {
    maquinaController.buscarManutencoes(req, res);
});

module.exports = router;