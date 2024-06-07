var database = require("../database/config")

function cadastrar(nome, quantidade, preco, fkEmpresa) {    
    var instrucao = `
    INSERT INTO Componentes (nomeComponente, quantidade, preco, fkEmpresa) VALUES (
        '${nome}', ${quantidade}, ${preco}, '${fkEmpresa}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarComponentes(fkEmpresa){
    instrucaoSql = `
    SELECT idComponente, nomeComponente, quantidade, preco FROM Componentes WHERE fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarComponentes(nome, quantidade, preco, idComponente){
    instrucaoSql = `
    UPDATE Componentes SET nomeComponente = '${nome}', quantidade = ${quantidade}, preco = ${preco} WHERE idComponente = ${idComponente};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirComponente(idComponente){
    instrucaoSql = `
    DELETE FROM Componentes WHERE idComponente = ${idComponente};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    atualizarComponentes,
    excluirComponente,
    buscarComponentes
};
