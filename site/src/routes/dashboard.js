var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.post("/componentesEmFalta", function (req, res) {
    dashboardController.componentesEmFalta(req, res);
});
router.post("/manutencoesRecorrentes", function (req, res) {
    dashboardController.manutencoesRecorrentes(req, res);
});
router.post("/computadoresReservas", function (req, res) {
    dashboardController.computadoresReservas(req, res);
});
router.post("/computadoresInoperantes", function (req, res) {
    dashboardController.computadoresInoperantes(req, res);
});
router.post("/computadoresSemLimpeza", function (req, res) {
    dashboardController.computadoresSemLimpeza(req, res);
});
router.post("/totalManutencao", function (req, res) {
    dashboardController.totalManutencao(req, res);
});
router.post("/totalMes", function (req, res) {
    dashboardController.totalMes(req, res);
});
router.post("/qtdManutencoes", function (req, res) {
    dashboardController.qtdManutencoes(req, res);
});
router.post("/leituraCPU", function (req, res) {
    dashboardController.leituraCPU(req, res);
});
router.post("/leituraRAM", function (req, res) {
    dashboardController.leituraRAM(req, res);
});

module.exports = router;

