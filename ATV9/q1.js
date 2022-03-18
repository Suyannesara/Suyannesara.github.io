//function when click calcular
function calcTabuada(){
  //Take number from user
  let entradaTabuada = parseInt(document.getElementById("entradaTabuada").value);

  //calc tabuada
  //let resultTabuada = entradaTabuada * 1
  //document.getElementById("resultFinal"). innerHTML = `<br> ${entradaTabuada} X 1 = ${resultTabuada}`
  let resultTabuada = []

  //put values of multiplication inside the array
  for(let i = 0; i < 11; i++){
    resultTabuada[i] = `<br> ${entradaTabuada} x ${i} = ${entradaTabuada * i}`
  }
  
  //apresentar na tela
  document.getElementById("resultFinal").innerHTML = resultTabuada
  
}

