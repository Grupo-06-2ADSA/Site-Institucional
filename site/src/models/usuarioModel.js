var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idFunc, nome, email, senha, tipo, fkEmpresa 
        FROM Funcionario 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, cnpj, telefone) {    
    var instrucao = `
    INSERT INTO Empresa (cnpj, nome, telefone) VALUES (
        '${cnpj}', '${nome}', '${telefone}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFuncionarioEmpresa(nome, email, senha, telefone, tipo, turno, cnpj){
    var instrucao = `
    INSERT INTO Funcionario (nome, email, senha, telefone, tipo, turno, estado, fkEmpresa) VALUES (
        '${nome}', '${email}', '${senha}', '${telefone}', '${tipo}', '${turno}', 'ativo', '${cnpj}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios(fkEmpresa){
    var instrucao = `
    SELECT idFunc, nome, email, tipo, senha, telefone, turno, estado 
    FROM Funcionario 
    WHERE fkEmpresa = ${fkEmpresa} AND tipo != 'Empresa';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarFuncionario(nome, email, senha, telefone, tipo, status, turno, idFunc){
    instrucaoSql = `
    UPDATE Funcionario 
    SET nome = '${nome}', email = '${email}', senha = '${senha}', telefone = '${telefone}', tipo = '${tipo}', estado = '${status}', turno = '${turno}' 
    WHERE idFunc = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirFuncionario(idFunc){
    instrucaoSql = `
    DELETE FROM Funcionario 
    WHERE idFunc = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    listarUsuarios,
    cadastrarFuncionarioEmpresa,
    atualizarFuncionario,
    excluirFuncionario
};
