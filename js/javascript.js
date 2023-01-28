var inputValor = document.querySelector('#currency')
var inputPeople = document.querySelector('#people')
var msg = document.querySelector('.msg')
var msgValor = document.querySelector('.msg-valor')
var custom = document.querySelector('.custom')
var buttons = document.querySelectorAll('.bottons button')
var gorjeta;

inputValor.placeholder = 'Digite um valor'
inputPeople.placeholder = 'Qtd de pessoas'
custom.placeholder = 'personalizado'
custom.style.fontSize = '15px'
custom.style.textAlign = 'center'


// recebe o valor da conta
function operationValor (){
  var valor = inputValor.value 
  inputValor.value = Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
  Number(valor)
  console.log(valor)
  
  if(valor > 0){
    msgValor.innerText = "Tudo certo!"
    msgValor.style.color = 'green'
  } else {
    msgValor.innerText = "Inválido"
    msgValor.style.color = 'red'
    inputValor.value = ""
    inputValor.focus()
  }
}

// recebe o percentual da gorjeta 
buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const gorjeta = e.target.value
    console.log(gorjeta)
  })
})


function customOperation (){  
  gorjeta = custom.value/100
  if(gorjeta > 0){
  Number(gorjeta)
  console.log(gorjeta)
  }else {
    custom.placeholder = 'inválido'    
    custom.value = ""
    custom.focus()
    
  }
}

// recebe o valor da quantida de pessoas
function operationPeople (){
    var people = inputPeople.value
    Number(people)

    if(people > 0){   
      msg.innerText = "tudo certo!"
      msg.style.color = 'green'       
    } else{
      msg.innerText = "Inválido"
      msg.style.color = 'red'  
      inputPeople.value = ""
      inputPeople.focus()
    }
    console.log(people)
}







//inputValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})





inputValor.addEventListener('change',operationValor)
inputPeople.addEventListener('change', operationPeople)
custom.addEventListener('change',customOperation)
custom.addEventListener('change',customOperation)




inputValor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})




     



