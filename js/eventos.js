/*  EVENTOS
Eventos são ações disparadas pela interação dos usuários na página
É o correto manejo desse eventos que tornam as páginas interativas e dinâmicas.

Eventos mais utilizados:
*/

//onclick	-> Disparado quando recebe um click.
const btn = document.querySelector('#onclick')
btn.addEventListener('click', function () {
    document.body.style.backgroundColor = "red"
})

//ondblclick -> Disparado quando clica duas vezes em um elemento.
document.querySelector("#ondblclick").addEventListener("dblclick", function () {
    alert('Evento de clique duplo');
});

const div = document.querySelector('#OnMouseOverOut');
//onmouseover -> Disparado quando o mouse está sobre.
div.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "orange";
})

//onmouseout -> Disparado quando mouse é movido  para fora de um elemento.
div.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "blue";
})

//onmousemove -> Disparado quando mouse é movido no elemento.	
div.addEventListener("mousemove", function () {
    let p = document.querySelector('#texto')
    p.append(' o mouse moveu ')
})

//onfocus -> Disparado quando o elemento recebe o foco. Válido para input
document.querySelector("campoTexto").addEventListener("focus", function () {
    document.querySelector("campoTexto").value = ""

});

//onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar"
const selectElement = document.querySelector('.sorvete');

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.resultado');
    result.textContent = `Você gosta de : ${event.target.value}`;
});

//onblur -> Disparado quando o elemento perde o foco.
const blur = document.querySelector('#campoTexto')
    .addEventListener('blur', entrou)

function entrou(event) {
    event.target.style.borderColor = "blue";
}

//onkeypress -> Disparado quando uma tecla é pressiona e solta. 
document.querySelector('#campoTexto')
.addEventListener('keypress',teclaPressionada)

function teclaPressionada() {
 document.querySelector('#campoTexto').style.fontWeight = "bold";
}

//onkeydown -> Disparado quando uma tecla é pressiona. 
document.querySelector('#campoTexto')
.addEventListener('keydown',teclaPressionada)

function teclaPressionada() {
 document.querySelector('#campoTexto').style.color = "red";
}

//onkeyup -> Disparado quando uma tecla é solta sobre um elemento. 
document.querySelector('#campoTexto')
.addEventListener('keyup',teclaPressionada)

function teclaPressionada() {
 document.querySelector('#campoTexto').style.backgroundColor = "red";
}

//onload -> Disparado quando a página terminou de ser carregada.Body.
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
  
    loader.classList.add("loader--hidden")
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    })
  })

  //onresize -> Disparado quando a há um redirecionamento da janela.
window.addEventListener('resize',()=>{
    document.querySelector('body').style.backgroundColor = "red";
})
  

//onmousedown -> Disparado quando o clique do botão foi pressionado.
//onmouseup -> Disparado quando o clique do  botão é liberado. 
const texto = document.querySelector('#area')
texto.addEventListener('mouseup', entrar)
texto.addEventListener('mousedown', sair)

function entrar() {
    texto.innerText = "mouseup!"
    texto.style.backgroundColor = 'red'
}
function sair() {
    texto.innerText = 'mousedown!'
    texto.style.backgroundColor = 'blue'
}