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

function cadastrarManutencao(data, descricao, tipo, fkMaquina, responsavel) {    
    var instrucao = `
    insert into HistoricoManutencao (Dia, descricao, tipo, fkMaquina, responsavel) values (
        '${data}', '${descricao}', '${tipo}', '${fkMaquina}', ${responsavel});
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMaquinas(fkEmpresa, fkSala) {
    instrucaoSql = `
    select hostname, ip, imagem from Maquina m where m.fkEmpresa = ${fkEmpresa} and m.fkSala = '${fkSala}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarManutencoes(fkMaquina) {
    instrucaoSql = `
    select Dia, descricao, hm.tipo, f.nome nomeResponsavel from HistoricoManutencao hm inner join Funcionario f on hm.responsavel = f.idFunc where fkMaquina = '${fkMaquina}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirMaquina(hostname){
    instrucaoSql = `
    delete from Maquina where hostname = '${hostname}';
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
    update Maquina set hostname = '${hostname}', ip = '${ipv4}', imagem = '${dtImagem}' where hostname = '${hostname}';
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