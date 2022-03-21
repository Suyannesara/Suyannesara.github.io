function jogar(){
  //Array
  let opcoes = ["pedra", "papel", "tesoura"];

  // mudar a mãozinha de acordo com sorteado
  let sorteado = Math.floor(Math.random() * 3) + 1;
  
  let tipoJogada = document.getElementsByClassName("adversario").value;

  alert(sorteado[1])

  if(opcoes[0] == sorteado){
    document.getElementById("troca").innerHTML = `<span>✊🏽</span>`

  }
  if (sorteado == opcoes[1]){
    document.getElementById("troca").innerHTML = `aaaaaaa`

  }
  if (sorteado == opcoes[2]){
    document.getElementById("troca").innerHTML = `<span>✌🏽</span>`
  }

  }

  // if (tipoJogada == options[sorteado]){
  //   alert("Fizeram a mesma escolha")
  // }



// tesoura -> papel
// papel -> pedra
// pedra -> tesoura