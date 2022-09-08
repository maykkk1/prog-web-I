const pergunta1 = document.getElementsByName('pergunta1')
pergunta1.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(1, 0)
    })
})

const pergunta2 = document.getElementsByName('pergunta2')
pergunta2.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(2, 2)
    })
})

const pergunta3 = document.getElementsByName('pergunta3')
pergunta3.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(3, 2)
    })
})

const pergunta4 = document.getElementsByName('pergunta4')
pergunta4.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(4, 3)
    })
})

const pergunta5 = document.getElementsByName('pergunta5')
pergunta5.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(5, 2)
    })
})

const pergunta6 = document.getElementsByName('pergunta6')
pergunta6.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(6, 0)
    })
})

const pergunta7 = document.getElementsByName('pergunta7')
pergunta7.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(7, 3)
    })
})

const pergunta8 = document.getElementsByName('pergunta8')
pergunta8.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(8, 2)
    })
})

const pergunta9 = document.getElementsByName('pergunta9')
pergunta9.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(9, 1)
    })
})

const pergunta10 = document.getElementsByName('pergunta10')
pergunta10.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(10, 3)
    })
})






const mostrarResposta = (index, resposta) => {
    const respostaCorreta = document.getElementById(`resposta-correta${index}`)
    const respostaErrada = document.getElementById(`resposta-errada${index}`)
    const respostas = document.getElementsByName(`pergunta${index}`)
    if (respostas[resposta].checked) {
        respostaCorreta.style.display = 'block'
        respostaErrada.style.display = 'none'
    } else {
        respostaCorreta.style.display = 'none'
        respostaErrada.style.display = 'block'
    }
}

