const test = document.getElementsByName('pergunta1')[0]

console.log(test)

test.addEventListener("click", () => {
    console.log('aaa')
})




const mostrarResposta = (e) => {
    console.log(e.target)
    // const respostaCorreta = document.getElementById('resposta-correta1')
    // const respostaErrada = document.getElementById('resposta-errada1')
    // const respostas = document.getElementsByName('pergunta1')
    // if (respostas[0].checked) {
    //     respostaCorreta.style.display = 'block'
    //     respostaErrada.style.display = 'none'
    // } else {
    //     respostaCorreta.style.display = 'none'
    //     respostaErrada.style.display = 'block'
    // }
}

