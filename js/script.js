//função para adicionar o item a lista.

let tarefas = document.querySelector("#adicionarTarefa");
let list = document.querySelector("#novaTarefa");


function adicionar(){

    let item = document.createElement("li");
    item.setAttribute('class', 'itens')
    item.classList.add('itens')

        if(tarefas.value.trim()){         
        
        textnode = document.createTextNode(tarefas.value);
        item.appendChild(textnode)
        
        list.insertBefore(item, list.childNodes[0]);
        
        document.querySelector('#semTarefas').style.display = "none";
        document.querySelector('#comTarefas').style.display = "flex";    
        
        let concluir = document.createElement('button');
        concluir.setAttribute('class', 'concluir');
        concluir.classList.add('concluir');
        item.appendChild(concluir);
        
        
        let excluir = document.createElement('button');
        excluir.setAttribute('class', 'excluir');
        excluir.classList.add('excluir');
        item.appendChild(excluir);

        
    }
}

document.querySelector('#enviar').onclick = adicionar;

tarefas.onkeyup = function(evento){
    if(evento.key === "Enter"){
        adicionar();
    }
}

 



