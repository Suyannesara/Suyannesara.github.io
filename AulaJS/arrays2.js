//Array with names
let alunos = ["Amanda Layanne, Alexandre, Luis, Letícia, Suyanne, Rafael Gomes"]



function lacoForEach(){
  let texto = "<ul>"
  //Laço de repetição automático que pega os dados do array e executa uma determinada gunção
  //For each só trabalha com variáveis do tipo array
  alunos.forEach(listarAlunos);
  texto = "</ul>"

  //value == alunos
  function listarAlunos(value){
    texto += `<li> ${value.toUpperCase()} </li>`
  }

  document.getElementById("demo").innerHTML = texto;
}

//lacoForEach();
function lacoFor(){
  for (i = 0; i < alunos.length; i++){
    texto += `<li> ${alunos[i].toLowerCase()} </li>`
  }
  document.getElementById("demo").innerHTML = texto;
}


//For decrescente
function lacoForDesc(){
  for (i = alunos.length; i != 0 < ; i++){
    texto += `<li> ${alunos[i].toLowerCase()} </li>`
  }
  document.getElementById("demo").innerHTML = texto;
}


//Só funciona com array ou objetos
function lacoForIn(){
  for (i in alunos){
  texto += `<li> ${alunos[i]} </li>`
  }
}


function limpar(){
  document.getElementById("demo").innerHTML = "";
}

function removerUltimoAluno(){
  alunos.pop()
  lacoFor()
}
function incluirAluno(){
  let novoAluno = ("Digite o novo aluno: ")
  alunos.push(novoAluno)
  lacoFor()
}