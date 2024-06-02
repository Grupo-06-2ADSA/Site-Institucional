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
    select count(hostname) reservas from Maquina where fkSala is null and fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresInoperantes(fkEmpresa){
    instrucaoSql = `
    select count(m.hostname) inoperantes from Maquina m join leituracpu l where l.fkMaquina = m.hostname and l.dataLeitura < day(now()) and m.fkEmpresa = ${fkEmpresa};
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

function totalManutencao(fkEmpresa){
    instrucaoSql = `
    select sum(preco) as total from Componentes c join HistoricoManutencao h where h.tipo = c.nomeComponente and c.fkEmpresa = ${fkEmpresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalMes(fkEmpresa){
    instrucaoSql = `
    SELECT 
    MONTH(h.Dia) AS mes,
    SUM(c.preco) AS valorTotalGasto
FROM 
    HistoricoManutencao h
JOIN 
    Componentes c ON h.tipo = c.nomeComponente
WHERE 
    MONTH(h.Dia) BETWEEN 1 AND 7 and c.fkEmpresa = ${fkEmpresa}
GROUP BY 
    MONTH(h.Dia)
ORDER BY 
    MONTH(h.Dia);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdManutencoes(fkEmpresa){
    instrucaoSql = `
    SELECT 
    h.tipo AS tipoManutencao,
    COUNT(*) AS quantidadeManutencoes
FROM 
    HistoricoManutencao h
JOIN
    Empresa
WHERE
    idEmpresa = ${fkEmpresa}
GROUP BY 
    h.tipo
ORDER BY 
    h.tipo;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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