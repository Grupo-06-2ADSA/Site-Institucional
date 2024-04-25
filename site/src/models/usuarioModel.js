var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT nome, email, senha, tipo, fkEmpresa FROM Funcionario WHERE email = '${email}' AND senha = '${senha}';
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



module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionarioEmpresa
};