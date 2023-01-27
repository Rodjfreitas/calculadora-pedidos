var inputValor = document.querySelector('#currency')
var inputPeople = document.querySelector('#people')

function operation (){
  var valor = inputValor.value  
  Number(valor)

  var people = inputPeople.value
  Number(people)
  //inputValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  console.log(valor)
  console.log(people)

  if(people ==  "0"){
    var msg = document.querySelector('.msg')
    msg.innerText = "can´t be zero"        
  }
    

}




inputValor.addEventListener('change',operation)
inputPeople.addEventListener('change', operation)


inputValor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})




     



