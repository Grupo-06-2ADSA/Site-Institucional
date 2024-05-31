var database = require("../database/config")

function componentesEmFalta(fkEmpresa) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select nomeComponente, preco from Componentes where quantidade = 0 and fkEmpresa = ${fkEmpresa};
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function manutencoesRecorrentes(fkEmpresa){
    instrucaoSql = `
    select tipo, count(tipo) qtd from HistoricoManutencao join Empresa where cnpj = ${fkEmpresa} group by tipo;

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresReservas(fkEmpresa){
    instrucaoSql = `
    select count(hostname) from Maquina where fkSala = null and fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresInoperantes(fkEmpresa){
    instrucaoSql = `
    select count(m.hostname) from Maquina m join leituracpu l where l.fkMaquina = m.idMaquina and l.dataLeitura < day(now()) and m.fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresSemLimpeza(fkEmpresa){
    instrucaoSql = `
    SELECT COUNT(DISTINCT h.fkMaquina) 
FROM historicomanutencao h join Empresa
WHERE h.tipo = 'Limpeza' 
  AND h.Dia <= DATE_SUB(CURDATE(), INTERVAL 6 MONTH) and Empresa.cnpj = ${fkEmpresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    componentesEmFalta,
    manutencoesRecorrentes,
    computadoresReservas,
    computadoresInoperantes,
    computadoresSemLimpeza
};