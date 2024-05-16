var express = require("express");
var router = express.Router();
var maquinaController = require("../controllers/maquinaController");

//Recebendo os dados do html e direcionando para a função cadastrar de maquinaController.js
router.post("/cadastrarMaquina", function (req, res) {
    maquinaController.cadastrar(req, res);
});

router.post("/verificarFkSala", function (req, res) {
    maquinaController.verificarFkSala(req, res);
});

router.post("/buscarMaquinas", function (req, res) {
    maquinaController.buscarMaquinas(req, res);
});

router.post("/buscarNumeroMaquinas", function (req, res) {
    maquinaController.numMaquinas(req, res);
});


module.exports = router;