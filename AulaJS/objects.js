//OBJETOS
let car = {
	name: "Fiat",
	model: "Toro",
	color: "blue",
	km: 0,

	//funcionalidade que será executada por esse obj
	move: function (addkm)
	{
		this.km += addkm
	},	

  //Usa-se "this" para referenciar propriedades que estão dentro do próprio bloco do objeto
  status: function(){
    return `<br> Dados do Carro
      <br> Marca: ${this.name}
      <br> Modelo: ${this.model}
      <br> Cor: ${this.color}`
  }

};

//chamar metodo do carro
car.move(50) // = car["move"](50)
//Mudar atributos diretamente
car.color = "yellow"
document.write(car.status());
