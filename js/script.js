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
        tarefas.value= "";
        document.querySelector('#semTarefas').style.display = "none";
        document.querySelector('#comTarefas').style.display = "flex";    
        
        let concluir = document.createElement('button');
        concluir.setAttribute('class', 'concluir');
        concluir.classList.add('concluir');
        concluir.setAttribute('title', 'Concluir tarefa');
        item.appendChild(concluir);
        
        
        let excluir = document.createElement('button');
        excluir.setAttribute('class', 'excluir');
        excluir.classList.add('excluir');
        excluir.setAttribute('title', 'Excluir tarefa');
        item.appendChild(excluir);
        
        excluir.addEventListener('click', () => {
            item.parentNode.removeChild(item);
                        
        })
        concluir.addEventListener('click', () => {
            if (!item.classList.contains("concluida")) {
                item.classList.add('concluida');
                
            }
            else{
                item.classList.remove('concluida');
                
            }
            
        })
    }
}

document.querySelector('#enviar').onclick = adicionar;

tarefas.onkeyup = function(evento){
    if(evento.key === "Enter"){
        adicionar();
    }
}





