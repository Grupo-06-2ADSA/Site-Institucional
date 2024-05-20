var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idFunc, nome, email, senha, tipo, fkEmpresa FROM Funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// CADASTRO EMPRESA
function cadastrar(nome, cnpj, telefone) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into Empresa (cnpj, nome, telefone) values (
        '${cnpj}', '${nome}', '${telefone}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//Cadastro Funcionário
function cadastrarFuncionarioEmpresa(nome, email, senha, telefone, tipo, turno, cnpj){
    var instrucao = `
    insert into Funcionario (nome, email, senha, telefone, tipo, turno, estado, fkEmpresa) values (
        '${nome}', '${email}', '${senha}', '${telefone}', '${tipo}','${turno}','ativo', '${cnpj}');
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios(fkEmpresa){
    var instrucao = `
    select idFunc, nome, email, tipo, senha, telefone, turno, estado from Funcionario where fkEmpresa = ${fkEmpresa} and tipo != 'Empresa';
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarFuncionario(nome, email, senha, telefone, tipo, status, turno, idFunc){
    instrucaoSql = `
    update Funcionario set nome = '${nome}', email = '${email}', senha = '${senha}', telefone = '${telefone}', tipo = '${tipo}', estado = '${status}', turno = '${turno}' where idFunc = ${idFunc};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirFuncionario(idFunc){
    instrucaoSql = `
    delete from Funcionario where idFunc = ${idFunc};
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