var express = require("express");
var router = express.Router();
var estoqueController = require("../controllers/estoqueController");

//Recebendo os dados do html e direcionando para a função cadastrar de maquinaController.js
router.post("/cadastrarComponente", function (req, res) {
    estoqueController.cadastrar(req, res);
});

router.post("/buscarComponentes", function (req, res) {
    estoqueController.buscarComponentes(req, res);
});

router.post("/atualizarComponentes", function (req, res) {
    estoqueController.atualizarComponentes(req, res);
});

router.post("/excluirComponente", function (req, res) {
    estoqueController.excluirComponente(req, res);
});





module.exports = router;