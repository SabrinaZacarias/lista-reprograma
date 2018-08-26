//função para adicionar o item a lista.

let tarefas = document.querySelector("#adicionarTarefa");
let list = document.querySelector("#novaTarefa");


function adicionar(){
    if(tarefas.value.trim()){
        let item = document.createElement("li");
              
        textnode = document.createTextNode(tarefas.value);
        item.appendChild(textnode)
        
        list.insertBefore(item, list.childNodes[0]);

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

