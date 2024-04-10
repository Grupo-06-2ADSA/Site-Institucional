function note() {

    for(let i = 1; i <= 50; i++){
        repeticao.innerHTML += `
            <div id="campo" onclick="graficos(${i})">
                <p>${i}</p>
                <div id="bolinha"></div>
                <p>10/04/2024</p>
                <p id="editar">Editar</p>
            </div>`;
        if (i >= 7) {
            repeticao.style.overflowY = "scroll";
            notebooks.style.overflow = "hidden";
        } else{

        }
    }
}


let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function graficos(id) {
    let tituloHeader = document.getElementById("header-title");
    modal.style.display = "block";
    tituloHeader.innerHTML += `ID: ${id}`;
    header.innerHTML += `<button class="alerta"></button>`
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function pesquisarNote(){
    let idPesquisa = Number(Pesquisar.value);

    for (let i = 1; i <= 36; i++){
        if (i == idPesquisa) {
            graficos(idPesquisa);
        }
    }

    if (idPesquisa > 50) {
        alert("Não foi possível localizar um notebook com esse ID")
    }
}

let statusCampo = document.getElementById("status_campo");
let modificacao = document.getElementById("ult_mod");

statusCampo.onclick = function(){
    img_ordenar.innerHTML = "img/ordenar-decrescente.png";
}