var inputValor = document.querySelector('#currency')
var inputPeople = document.querySelector('#people')
var msg = document.querySelector('.msg')
var custom = document.querySelector('.custom')

inputValor.placeholder = 'Digite um valor'
inputPeople.placeholder = 'Qtd de pessoas'
custom.placeholder = 'personalizado'
custom.style.fontSize = '15px'
custom.style.textAlign = 'center'


function operationValor (){   
  var valor = inputValor.value    
  Number(valor)
  console.log(valor)
}


function operationPeople (){
    var people = inputPeople.value
    Number(people)

    if(people != 0){   
      msg.innerText = "all right"
      msg.style.color = 'green'       
    } else{
      msg.innerText = "can´t be zero"
      msg.style.color = 'red'  
    }
    console.log(people)
}



//inputValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})





inputValor.addEventListener('change',operationValor)
inputPeople.addEventListener('change', operationPeople)





inputValor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})




     



