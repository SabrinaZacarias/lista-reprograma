//função para adicionar o item a lista.

let tarefas = document.querySelector("#adicionarTarefa");

function adicionar(){
    if(tarefas.value.trim()){
        document.querySelector('#novaTarefa').innerHTML = tarefas.value;

        document.querySelector('#semTarefas').style.display = "none";
        document.querySelector('#comTarefas').style.display = "flex";
    }
}

document.querySelector('button').onclick = adicionar;

tarefas.onkeyup = function(evento){
    if(evento.key === "Enter"){
        adicionar();
    }
}

