/* 
let interruptor = 'on'

if (interruptor == 'on') {
    alert('A lampada está ligada')
} else {
    alert('A lampada está desligada')
}

let hora = new Date().getHours()
 if (hora<12) {
    alert('Bom dia')
 } else if (hora <18){
    alert('Boa tarde')
 }else{
    alert('Boa noite')
 } */

//VERIFICAÇÃO

const btn = document.querySelector('button')
btn.addEventListener('click', verificar)

function verificar() {
    let nome = document.querySelector("#nome").value

    if (nome == "" || nome == null) {
        let p = document.querySelector('#texto');
        p.innerHTML = "O campo está vazio"
        p.style.color="red"
    }else{
        let p = document.querySelector('#texto');
        p.innerHTML = "Campo preenchido"
        p.style.color="green"
    }
}