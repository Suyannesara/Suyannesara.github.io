let listaHomens = []
let listaMulheres = []

//Add a person
function addPessoa(){
  //Take value from the input
  let nome = document.getElementById("nome").value;
  let sexo =  document.getElementById("sexo").value;

  //Validation of blank input
  if (nome != ""){
  //Redirecting according to sex
    if (sexo == 'M'){
      listaHomens.push(nome)
      mostrarTela("homens")

    }else if(sexo == 'F'){
      listaMulheres.push(nome)
      mostrarTela("mulheres")
  }
  }else{
    alert("Você não pode adicionar um nome vazio à lista!")
  }
  
  function mostrarTela(tipoLista){
    alert(`A pessoa ${nome}, foi adicionada à lista de ${tipoLista}`)
  }
  
}

function mostrarListaPessoas(){
  if (listaMulheres == 0 || listaHomens == 0){
    alert(`Você precisa preencher as duas listas para apresentar os nomes na tela`)

  }else{
    document.getElementById("resultHomens"). innerHTML = `Lista de homens: ${listaHomens}`
    document.getElementById("resultMulheres"). innerHTML = `Lista de mulheres: ${listaMulheres}`
  }
}

function limparListaPessoa(){
  listaHomens = []
  listaMulheres = []

  document.getElementById("resultHomens"). innerHTML = ""
  document.getElementById("resultMulheres"). innerHTML = "" 

}
