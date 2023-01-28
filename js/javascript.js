var inputValor = document.querySelector('#currency')
var inputPeople = document.querySelector('#people')
var msg = document.querySelector('.msg')
var msgValor = document.querySelector('.msg-valor')
var custom = document.querySelector('.custom')

inputValor.placeholder = 'Digite um valor'
inputPeople.placeholder = 'Qtd de pessoas'
custom.placeholder = 'personalizado'
custom.style.fontSize = '15px'
custom.style.textAlign = 'center'


function operationValor (){   
  var valor = inputValor.value    
  Number(valor)
  
  if(valor > 0){
    msgValor.innerText = "Tudo certo!"
    msgValor.style.color = 'green'
  } else {
    msgValor.innerText = "Inválido"
    msgValor.style.color = 'red'
  }
}


function operationPeople (){
    var people = inputPeople.value
    Number(people)

    if(people > 0){   
      msg.innerText = "tudo certo!"
      msg.style.color = 'green'       
    } else{
      msg.innerText = "Inválido"
      msg.style.color = 'red'  
    }
    console.log(people)
}



//inputValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})





inputValor.addEventListener('change',operationValor)
inputPeople.addEventListener('change', operationPeople)





inputValor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})




     



