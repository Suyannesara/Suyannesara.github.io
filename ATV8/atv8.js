// ATV1
function calcMedia(){
  //Taking the values of inputs
  var nota1 = parseFloat(document.getElementById('nota1').value)

  var nota2 = parseFloat(document.getElementById('nota2').value)

  var nota3 = parseFloat(document.getElementById('nota3').value)

  //Calculating avarage
  var media = ((nota1*2) + (nota2*3) + (nota3*5)) / 10
  

  //Replacing content
  document.getElementById("media").innerHTML = media.toFixed(1);
}

//ATV2
function checkPin(){
  let password = document.getElementById('password').value;

  if (password == '2002'){
    document.getElementById('result').innerHTML = "Acesso Permitido"
  }
  else{
    document.getElementById('result').innerHTML = "Senha Inválida"
  }
}

//ATV3

function validateInterval(){
  //Read number
  var number = parseFloat(document.getElementById('value').value)

  //Checking interval
  if (number >=0 && number <= 25){
    changeContent("Intervalo [0,25]")	
  }
  else if(number >=26 && number <= 50){
    changeContent("Intervalo (25,50]") 	
  }
  else if(number >=51 && number <= 75){
    changeContent("Intervalo [50,75]")	
  }
  else if(number >=76 && number <= 100){
    changeContent("Intervalo (75,100]")
  }
  else{
     changeContent("Fora de Intervalo")
  }

  function changeContent(content){
    document.getElementById('value_result').innerHTML = content
  }
}
  

// ATV4
function checarGanho(){
  let salario = parseFloat(document.getElementById('salario').value)
  let percentual;

  if (salario >=0 && salario <= 400){
    percentual = 15/100
    calcSalario()
  } 

  else if (salario >=400.01 && salario <= 800){
    percentual = (12/100);
    calcSalario()
  }
  else if (salario >=800.01 && salario <= 1200){
    percentual = (10/100);
    calcSalario()
  }
  else if (salario >=1200.01 && salario <= 2000){
    percentual = (7/100);
    calcSalario()
  }
  else if (salario > 2000){
    percentual = (4/100);
    calcSalario()
  }

  function calcSalario(){
    let ganho = salario * percentual 
    let novoSalario = salario + ganho

    document.getElementById('novo_salario').innerHTML = novoSalario.toFixed(2)
  
    document.getElementById('ganho').innerHTML = ganho.toFixed(2)
  
    document.getElementById('percentual').innerHTML = percentual
  }
}


// ATV5
function calcImposto(){
  let salarioL = parseFloat(document.getElementById('salario_lisarb').value)
  let percentualL;

  if (salarioL >=0 && salarioL <= 2000){
    document.getElementById('resultL').innerHTML = "Isento"
  } 
  else if (salarioL >2000.00 && salarioL <= 3000){
    percentualL = 8/100
    showResult()
  } 
  else if (salarioL >3000.00 && salarioL <= 4500){
    percentualL = 18/100
    showResult()
  } 
  else if (salarioL > 4500.00){
    percentualL = 28/100
    showResult()
  } 

  function showResult(){
    let imposto = salarioL * percentualL

    document.getElementById('resultL').innerHTML = imposto
  }

}


//ATV6
function calcFuncionario(){
  //Getting values
  let nome = document.getElementById('nome_funcionario').value;
  let preco_hora = parseFloat(document.getElementById('preco_hora').value);
  let horas = parseFloat(document.getElementById('horas').value);

  //Calculating salary
  let salario_funcionario = preco_hora * horas

  //Replacing numbers
  document.getElementById('nome').innerHTML = nome
  document.getElementById('salario_funcionario').innerHTML = salario_funcionario

}


//ATV5

//Getting values
function calcConsAvarage(){
  dt_total = parseFloat(document.getElementById('dt_total').value);

  comb_total = parseFloat(document.getElementById('comb_total').value);

  cons_avarage = dt_total / comb_total

  document.getElementById('cons_avarage').innerHTML = cons_avarage.toFixed(3)
}
