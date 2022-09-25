/* 
EVENTOS DE TEMPO COM JAVASCRIPT 

Os eventos de tempo permitem a execução do código em intervalos de tempo
especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.
Os dois métodos-chave para usar com JavaScript são:

setTimeout (function, tempo em milliseconds)
-> Executa uma função, depois de esperar um número especifico de  milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

let btnStart = document.querySelector('.start')
btnStart.addEventListener('click', ativarContagem)

function ativarContagem() {
    document.querySelector('#tempo').innerHTML ='Começo a contar'
    //executa apena uma vez após o tempo determinado
     tempo = setTimeout(function () { 
        document.querySelector('#tempo').innerHTML ='Executou o setTimeout'
        document.body.style.backgroundColor = 'gray'
    }, 2000)
}
let btnStop = document.querySelector('.stop')
btnStop.addEventListener('click', pararContagem)

function pararContagem(){
clearTimeout(tempo)
document.querySelector('#tempo').innerHTML ='Parou a execução'
document.body.style.backgroundColor = 'white'
}

// Usando setInterval

function ativarContagem() {
   tempo = setInterval(function (){
        let cronometro = document.querySelector('#tempo').innerHTML
        let soma = parseInt (cronometro)-1 //parseInt transforma texto em número
        document.querySelector('#tempo').innerHTML =soma

        if(soma ===0){
            document.querySelector('#tempo').innerHTML="Tempo esgotado"
            pararContagem()
        } else{
            document.querySelector('#tempo').innerHTML =soma

        }
  

    },1000)
}


function pararContagem(){
    clearInterval(tempo)
}