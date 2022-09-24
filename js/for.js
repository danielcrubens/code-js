/* 
Laço de Repetição For, é um jeito fácil e rápido de executar uma ação repetidas vezes

*/

for (let i = 0; i < 10001; i++) {
    document.querySelector('#texto').innerHTML += i + " , "
}

let ano = new Date().getFullYear()

for (let i = ano; i >= 1900; i--) {
    document.querySelector('#ano').innerHTML += "<option value='" + i + "'>" + i + "</option>"
}

const carros = ["Gol", "Fusca", "Ka", "Brasília", "Palio"]
let tamanho = carros.length

for (let i = 0; i < tamanho; i++) {
    document.querySelector("#texto").innerHTML += carros[i] + " - "
}