let nSorteados = []

function sortear(){

  //Alimentado array com os números
  for (i = 0; i <= 5; i++){
    nSorteados[i] = Math.floor(Math.random() * 60) + 1
  }
  
  //Apresentando na tela
  document.getElementById("resultSorteio").innerHTML = `Resultado: ${nSorteados} `
}