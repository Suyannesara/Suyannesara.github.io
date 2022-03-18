let listaItens = [];

function addItem(){
//pegar dado do user e armazenas
  let novoItem = document.getElementById("nomeItem").value;

  listaItens.push(`${novoItem}`) 

  alert(`O item ${novoItem} foi adicionado a lista`)
}

function mostrarLista(){
  document.getElementById("resultLista").innerHTML = listaItens
}

function limparLista(){
  listaItens = []
  document.getElementById("resultLista").innerHTML = ""
}

