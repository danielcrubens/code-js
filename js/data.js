/* Manipular datas em JS */

//Comando base para pegar a data
let data = new Date()
console.log(data)

//Pegar o ani atual
let ano = data.getFullYear()
console.log(ano)

//Pegar o mês atual - de 0 até 11 sendo 0 Janeiro e 11 Dezembro
let mes = data.getMonth()
console.log(mes)

//Mostrar o mês no formato escrito
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

//Pegar dia do mês - 1 até 31
let diaMes = data.getDate()
console, log(diaMes)

//Pegar o dia da semana - 0 até 6
let diaSemana = data.getDay()
const diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
let diaSemanaEscrito = diaDaSemana[data.getDay]
console, log(diaSemanaEscrito)


//Pegar a hora de 0 até 23
let hora = data.getHours()
console.log(hora)

//Pegar minutos de 0 até 59
let minutos = data.getMinutes()
console.log(minutos)

//Pegar segundos de 0 até 59
let segundos = data.getSeconds()
console.log(segundos)

//Pegar milisegundos de 0 até 999
let milisegundos = data.getMilliseconds()
console.log(milisegundos)

//Pegar o data no padrão Brasileiro - dia/mes/ano
let dataBR = data.toDateString('pt-BR',{dateStyle:'short'})
console.log(dataBR)


//Pegar os valores separados
d = new Date()
diaMes = d.getDate()
mes = d.getMonth() +1
ano = d.getFullYear()
function addZero(x){
  return x <10 ? '0' + x: ''+x
}

let dataPadraoBR = addZero(diaMes) + "/"+ addZero (mes) + "/" + ano 
console.log(dataPadraoBR)

//Compara datas - maior ou menor. Ex: Vencimentos
let hoje = new Date()
let vencimento = new Date(2022,0,15)
if (hoje > vencimento) {
  console.log("Sua conta está vencida!")
} else {
  console.log("Ainda não venceu, tudo certo!")
}

//DIferença  entre duas datas em dias
let dataInicial = new Date()
let dataFinal = new Date(2022,11,31)

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

let diferencaDias = Math.ceil(diferencaTempo/ (24*60*60*1000))

console.log(`${diferencaDias} dias`)