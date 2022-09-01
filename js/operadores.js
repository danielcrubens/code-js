/* Entendendo Operadores:

  Os operadores JavaScript são usados para 
  atribuir valores, comparar valores, executar operações aritméticas e muitos mais.

São os sinais que usamos + - * / = ++ -- += -= && || etc....

São separados em 6 categorias:

1) Operadores Aritméticos (matemáticos) 
2) Operadores de Atribuição 
3) Operadores de Seqquência
4) Operadores de Comparação
5) Operador Condicional (Ternario)
6) Operadore Lógicos

*/
//Operadores Aritméticos (matemáticos) 
var valor1, valor2, total
valor1 = 5
valor2 = 7
total = valor1 + valor2
alert(total)

//Operadores de Atribuição 
var valor1, valor2, total
valor1 = 5
valor2 = 7
valor1 /= valor2
valor1 = valor1 / valor2

//Operadores de Sequência
var valor1, valor2, total
valor1 = "Daniel"
valor2 = "Rubens"
total = valor1 + valor2

//Operadores de Comparação
var valor1, valor2, total
valor1 = 5
valor2 = 7
total = (valor1 == valor2) // true ou false
total = (valor1 === valor2) // se  o valor e o tipo for o mesmo true ou false
total = (valor1 != valor2) // se  o valor é diferente 
total = (valor1 < 4) // se  o valor é menor
total = (valor1 <= 4) // se  o valor é menor ou igual 
total = (valor1 < 4) // se  o valor é maior
total = (valor1 <= 4) // se  o valor é maior ou igual 
alert(total)

//Operador Condicional (Ternario)
var idade, eleitor
idade = 18
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, eleitor"
alert('A resposta é:' + eleitor + ' a idade dele é de:' + idade)

//Operadore Lógicos
var idade, eleitor, resultado
idade = 25
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, eleitor"
resultado = (idade > 60 && idade < 70) //true  //false
resultado = (idade === 65 || idade === 72) //true  //false
resultado = !(idade === 65) //true  //false
alert(resultado)

//Ordem de Precedência dos operadores aritméticos
()
**
* / %
+ -

