let lsCar = ["Ferrari", "Porshe", "Lamboorguini"];

document.write(`<br>O carro que está no índice ${i} = ${lsCar[i]}`)


document.write(`<br>O primeiro carro é ${0}</br>`)
document.write(`<br>O último carro é ${lsCar[lsCar.length - 1]}</br>`)


let texto = "<ul>"

for(j = 1; j <lsCar.length; j++){
  texto += `<li>${lsCar[j]}</li>`
}

