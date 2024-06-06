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
    select count(hostname) reservas from Maquina where fkSala = 6 and fkEmpresa = ${fkEmpresa};
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
    SELECT DISTINCT h.fkMaquina as hostname, s.nome, h.Dia
FROM historicomanutencao h 
JOIN Maquina m on h.fkMaquina = m.hostname
JOIN Sala s on m.fkSala = s.idSala
WHERE h.tipo = 'Limpeza' 
  AND h.Dia <= DATE_SUB(CURDATE(), INTERVAL 6 MONTH) AND m.fkEmpresa = ${fkEmpresa};`;

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
    meses.mes,
    COALESCE(SUM(c.preco), 0) AS valorTotalGasto
FROM 
    (
        SELECT 1 AS mes
        UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 
        UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 10 UNION ALL SELECT 11 UNION ALL SELECT 12
    ) meses
LEFT JOIN 
    HistoricoManutencao h ON meses.mes = MONTH(h.Dia)
LEFT JOIN 
    Componentes c ON h.tipo = c.nomeComponente and c.fkEmpresa = ${fkEmpresa}
GROUP BY 
    meses.mes
ORDER BY 
    meses.mes;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdManutencoes(fkEmpresa){
    instrucaoSql = `
    WITH TiposManutencao AS (
        SELECT 'Bateria' AS tipo
        UNION ALL
        SELECT 'CPU'
        UNION ALL
        SELECT 'Disco'
        UNION ALL
        SELECT 'Limpeza'
        UNION ALL
        SELECT 'Memória'
        UNION ALL
        SELECT 'Rede'
        UNION ALL
        SELECT 'Temperatura'
    )
    SELECT 
        t.tipo AS tipoManutencao,
        COUNT(h.tipo) AS quantidadeManutencoes
    FROM 
        TiposManutencao t
    LEFT JOIN 
        HistoricoManutencao h ON t.tipo = h.tipo
    JOIN Empresa on cnpj = ${fkEmpresa}
    GROUP BY 
        t.tipo
    ORDER BY 
        t.tipo;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leituraCPU(fkMaquina){
    instrucaoSql = `
    select s.tempoAtividade, c.nome, c.emUso, c.temp from leituracpu c join leituraso s where c.fkMaquina = s.fkMaquina and c.fkMaquina = '${fkMaquina}' order by c.dataLeitura desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leituraRAM(fkMaquina){
    instrucaoSql = `
    select r.emUso, r.total from leituramemoriaram r join Maquina m where r.fkMaquina = m.hostname and m.hostname = '${fkMaquina}' order by r.dataLeitura desc limit 1;`;

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
    qtdManutencoes,
    leituraCPU,
    leituraRAM
};