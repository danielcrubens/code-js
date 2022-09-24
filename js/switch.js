/* SWITCH 

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação.
Caso a condição não seja compatível não se´ra executada e o valor padrão será acionado

*/

const btn = document.querySelector('#verificaCor')
btn.addEventListener('click', verificado)
function verificado() {
    let cor = document.querySelector('#cor').value
    cor = cor.toLowerCase()
    switch (cor) {
        case "azul":
            //o que acontece
            document.body.style.backgroundColor ="blue"
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor ="red"
            break;
        case "verde":
            //o que acontece
            document.body.style.backgroundColor ="green"
            break;

        default:
            document.querySelector('#texto').innerHTML =`Nenhuma cor disponível para: <b>${cor}</b>`
    }

}

