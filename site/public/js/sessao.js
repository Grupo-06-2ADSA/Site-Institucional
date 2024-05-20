// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cnpj = sessionStorage.EMPRESA_USUARIO;
    var tipo = sessionStorage.TIPO_USUARIO;
    let idFunc = sessionStorage.ID_USUARIO;

    var nomeUsuario = document.getElementById("nomeUsuario");
    var tipoUsuario = document.getElementById("tipoUsuario");
    
    if (email != null && nome != null && tipo != null && cnpj != null && idFunc != null) {
        nomeUsuario.innerHTML += nome;
        tipoUsuario.innerHTML = tipo
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function verificarTipo(){
    if(sessionStorage.TIPO_USUARIO == "Empresa" || sessionStorage.TIPO_USUARIO == "Gestor"){
        window.location = "dashGestor.html";
    }
    else{
        window.location = "dash.html";
    }
}

