/*  ARRAY
 Os arrays Javascript são usados para armazenar vários valores em uma única variável. 
 Diferente dos objetos, que funcionam com propriedades os "nomes" que você dá para os itens dentro dele,
 os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

 Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.
 
 Ex: const lista =["arroz, feijão", "macarrão", "leite"]

 A lista [0] (lista na posição 0) vai conter o valor "arroz"
 A lista [1] (lista na posição 1) vai conter o valor "feijão"

 E assim por diante.
*/

let lista = ["arroz", "feijão", "macarrão", "leite"]

//Retorna o número de elementos do array
lista.length //3

//Adicionando elementos no array usando o método push
lista.push('frango')

//Como reconhecer um Array
Array.isArray(lista)


//MÉTODOS ARRAY

/* JOIN */
const pessoa = ["Daniel", "Rubens", 33, "Desenvolvedor"]
document.querySelector("#texto").innerHTML = pessoa.join(' - ')

/* REMOVER ULTIMO ITEM */
pessoa.pop()

/* ADICIONA UM ELEMENTO */
pessoa.push("Alto")


/* REMOVER PRIMEIRO ITEM */
pessoa.shift()

/* ADICIONA UM NOVO ELEMENTO NO INÍCIO DO ARRAY (ELEMENTOS MAIS VELHOS) */
pessoa.unshift('Inteligente')

/*ADICIONA MÚLTIPLOS VALORES NO ARRAY NUMA DETERMINADA POSIÇÃO  */
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2")
//O primeiro parâmetro (1) define a posição onde deve ser adicionado novos elementos (splicing in).
//O segundo parâmetro (0) define quantas elementos devem ser removidos.

/* CONCATENANDO  ARRAYS */
const lista1 = ["arroz", "feijão", "farinha", "leite"]
const lista2 = ["suco", "fuba", "fermento"]
const lista3 = ["sal"]

const superLista = lista1.concat(lista2, lista3)

document.querySelector("#texto").innerHTML = superLista

/* FATIANDO UM ARRAY */
const jogadores = ["Grafite", "Diego", "Pelé", "Maradona", "Neymar", "Miranda", "Vampeta", "Evra"]
const craques = jogadores.slice(2, 6)
document.querySelector("#texto").innerHTML = craques

/* INTENS DO ARRAY EM ORDEM ALFABÉTICA */
const jogOrdem = jogadores.sort()
document.querySelector("#texto").innerHTML = jogOrdem

/* INTENS DO ARRAY EM ORDEM DECRESCENTE (strings) */
jogadores.reverse()
document.querySelector("#texto").innerHTML = jogadores

/* ORDENAÇÃO NUMÉRICA */
const numeros = [40, 100, 1, 5, 25, 10]
numeros.sort(function(a,b){return a-b})

document.querySelector("#texto").innerHTML = numeros


