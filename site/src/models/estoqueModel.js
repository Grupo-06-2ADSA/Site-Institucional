var database = require("../database/config")

function cadastrar(nome, quantidade, preco, fkEmpresa) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into Componentes (nomeComponente, quantidade, preco, fkEmpresa) values (
        '${nome}', ${quantidade}, ${preco},'${fkEmpresa}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarComponentes(fkEmpresa){
    instrucaoSql = `
    select idComponente, nomeComponente, quantidade, preco from Componentes where fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarComponentes(nome, quantidade, preco, idComponente){
    instrucaoSql = `
    update Componentes set nomeComponente = '${nome}', quantidade = ${quantidade}, preco = ${preco} where idComponente = ${idComponente};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirComponente(idComponente){
    instrucaoSql = `
    delete from Componentes where idComponente = ${idComponente};
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