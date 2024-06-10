var database = require("../database/config")

function componentesEmFalta(fkEmpresa) {    
    var instrucao = `
    SELECT nomeComponente, preco FROM Componentes WHERE quantidade = 0 AND fkEmpresa = ${fkEmpresa};
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function manutencoesRecorrentes(fkEmpresa){
    instrucaoSql = `
    SELECT tipo, COUNT(tipo) AS qtd FROM HistoricoManutencao JOIN Empresa ON cnpj = ${fkEmpresa} GROUP BY tipo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresReservas(fkEmpresa){
    instrucaoSql = `
    SELECT COUNT(hostname) AS reservas FROM Maquina WHERE fkSala = 6 AND fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresInoperantes(fkEmpresa){
    instrucaoSql = `
    SELECT COUNT(DISTINCT m.hostname) AS inoperantes 
    FROM Maquina m 
    JOIN leituracpu l ON l.fkMaquina = m.hostname 
    WHERE l.dataLeitura < DATEADD(DAY, -1, GETDATE()) AND m.fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function computadoresSemLimpeza(fkEmpresa){
    instrucaoSql = `
    SELECT DISTINCT h.fkMaquina AS hostname, s.nome, h.Dia
    FROM historicomanutencao h 
    JOIN Maquina m ON h.fkMaquina = m.hostname
    JOIN Sala s ON m.fkSala = s.idSala
    WHERE h.tipo = 'Limpeza' 
      AND h.Dia <= DATEADD(MONTH, -6, GETDATE()) AND m.fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalManutencao(fkEmpresa){
    instrucaoSql = `
    SELECT SUM(preco) AS total 
    FROM Componentes c 
    JOIN HistoricoManutencao h ON h.tipo = c.nomeComponente 
    WHERE c.fkEmpresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalMes(fkEmpresa){
    instrucaoSql = `
    SELECT 
        meses.mes,
        COALESCE(SUM(c.preco), 0) AS valorTotalGasto
    FROM 
        (VALUES 
            (1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12)
        ) AS meses(mes)
    LEFT JOIN 
        HistoricoManutencao h ON meses.mes = MONTH(h.Dia)
    LEFT JOIN 
        Componentes c ON h.tipo = c.nomeComponente AND c.fkEmpresa = ${fkEmpresa}
    GROUP BY 
        meses.mes
    ORDER BY 
        meses.mes;
    `;

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
    JOIN Empresa ON cnpj = ${fkEmpresa}
    GROUP BY 
        t.tipo
    ORDER BY 
        t.tipo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leituraCPU(fkMaquina){
    instrucaoSql = `
    SELECT TOP 1 s.tempoAtividade, c.nome, c.emUso, c.temp 
    FROM leituracpu c 
    JOIN leituraso s ON c.fkMaquina = s.fkMaquina 
    WHERE c.fkMaquina = '${fkMaquina}' 
    ORDER BY c.dataLeitura DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leituraRAM(fkMaquina){
    instrucaoSql = `
    SELECT TOP 1 r.emUso, r.total 
    FROM leituramemoriaram r 
    JOIN Maquina m ON r.fkMaquina = m.hostname 
    WHERE m.hostname = '${fkMaquina}' 
    ORDER BY r.dataLeitura DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leituraDisco(fkMaquina){
    instrucaoSql = `
    SELECT total, emUso, disponivel 
    FROM LeituraDisco 
    WHERE fkMaquina = '${fkMaquina}';
    `;

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
    leituraRAM,
    leituraDisco
};
