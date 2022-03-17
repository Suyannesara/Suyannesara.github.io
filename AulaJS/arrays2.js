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

for (i = 0; i < alunos.length; i++){

}
