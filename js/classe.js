/*  

 Classes são como "fábricas" para criar objetos
 Pode se dizer que são "funções especiais" para criação de objetos

 Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, 
 as Classes no JS usam um método chamado constructor() para fabricar os objetos
*/

class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina(){
        return this.modelo + 'buzinou: Biiiiiiiiii'
    }
}

const uno = new Carro('Fiat','Uno',2001)
const ka = new Carro('Ford', 'Ka',2013)
ka.ano = 2014
console.log(gol.buzina())