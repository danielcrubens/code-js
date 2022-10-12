/* 

JSON significa JavaScript Object Notation que traduzindo pro português fica algo
como notação de objeto JavaScript.

Explicando  de um modo simples Json é basicamente uma forma de converter um objeto em texto
e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples,
já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão Json em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/




// OBJETO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: ["1.6", "1.4", "1.0"]
}
//CONVERTER PARA TEXTO json
let texto = JSON.stringify(carro)
//COLOCOU O TEXTO NO NOSSO HTML
document.querySelector('#area').innerHTML = texto
//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto)
//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[2])



const button = document.querySelector("button")

button.onclick = function () {
    let input = document.querySelector('#cep').value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/')
    ajax.send()

    ajax.onload = function () {
        //document.querySelector('#texto').innerHTML = this.responseText
        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText)
        //AQUI PEGUEI OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro
        let cidade = obj.localidade
        let estado = obj.uf
        document.querySelector('#texto').innerHTML = "Logradouro:" + logradouro + "<br> Cidade:" + cidade + "<br> Estado:" + estado
    }
}



