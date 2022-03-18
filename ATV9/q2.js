function calcIntervalo(){
  //take values from user
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);

  let valores = []

  for (i = valor1 + 1; i < valor2 ; i++){ 
    valores = valores + `${i},`  
  }

  document.getElementById("intervalo").innerHTML = `${valor1} e ${valor2}`

  document.getElementById("resultIntervalo").innerHTML = valores

}

