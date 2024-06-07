var database = require("../database/config")

function cadastrar(hostname, ip, dtImagem, fkSala, fkEmpresa) {    
    var instrucao = `
    INSERT INTO Maquina (hostname, ip, imagem, fkSala, fkEmpresa) VALUES (
        '${hostname}', '${ip}', '${dtImagem}', ${fkSala}, '${fkEmpresa}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarManutencao(data, descricao, tipo, fkMaquina, responsavel) {    
    var instrucao = `
    INSERT INTO HistoricoManutencao (Dia, descricao, tipo, fkMaquina, responsavel) VALUES (
        '${data}', '${descricao}', '${tipo}', '${fkMaquina}', ${responsavel});
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMaquinas(fkEmpresa, fkSala) {
    instrucaoSql = `
    SELECT hostname, ip, imagem FROM Maquina WHERE fkEmpresa = ${fkEmpresa} AND fkSala = ${fkSala};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarManutencoes(fkMaquina) {
    instrucaoSql = `
    SELECT Dia, descricao, hm.tipo, f.nome AS nomeResponsavel 
    FROM HistoricoManutencao hm 
    INNER JOIN Funcionario f ON hm.responsavel = f.idFunc 
    WHERE fkMaquina = '${fkMaquina}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirMaquina(hostname){
    instrucaoSql = `
    DELETE FROM Maquina WHERE hostname = '${hostname}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirHistorico(hostname){
    instrucaoSql = `
    DELETE FROM HistoricoManutencao WHERE fkMaquina = '${hostname}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMaquina(hostname, ipv4, dtImagem){
    instrucaoSql = `
    UPDATE Maquina SET ip = '${ipv4}', imagem = '${dtImagem}' WHERE hostname = '${hostname}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarMaquinas,
    excluirMaquina,
    excluirHistorico,
    atualizarMaquina,
    cadastrarManutencao,
    buscarManutencoes
};
