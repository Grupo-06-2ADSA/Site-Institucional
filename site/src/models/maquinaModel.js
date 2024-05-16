var database = require("../database/config")

function cadastrar(hostname, ip, dtImagem, fkSala, fkEmpresa) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into maquina (hostname, ip, imagem, fkSala, fkEmpresa) values (
        '${hostname}', '${ip}', '${dtImagem}', ${fkSala},'${fkEmpresa}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarFkSala(nomeSala, fkEmpresa){
    var instrucao = `
    select idSala from sala where nome = '${nomeSala}' and fkEmpresa = '${fkEmpresa}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMaquinas(fkEmpresa) {
    instrucaoSql = `
    select idMaquina, hostname, imagem from Maquina where fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function numMaquinas(fkEmpresa) {

    instrucaoSql = `
      SELECT count(idMaquina) numMaquinas from Maquina where fkEmpresa = ${fkEmpresa}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    verificarFkSala,
    buscarMaquinas,
    numMaquinas
};