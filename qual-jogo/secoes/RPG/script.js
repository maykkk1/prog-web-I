const listaDeResultados = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
]

const pergunta1 = document.getElementsByName('pergunta1')
pergunta1.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(1, 3)
    })
})

const pergunta2 = document.getElementsByName('pergunta2')
pergunta2.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(2, 3)
    })
})

const pergunta3 = document.getElementsByName('pergunta3')
pergunta3.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(3, 0)
    })
})

const pergunta4 = document.getElementsByName('pergunta4')
pergunta4.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(4, 2)
    })
})

const pergunta5 = document.getElementsByName('pergunta5')
pergunta5.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(5, 0)
    })
})

const pergunta6 = document.getElementsByName('pergunta6')
pergunta6.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(6, 2)
    })
})

const pergunta7 = document.getElementsByName('pergunta7')
pergunta7.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(7, 0)
    })
})

const pergunta8 = document.getElementsByName('pergunta8')
pergunta8.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(8, 1)
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
        mostrarResposta(10, 2)
    })
})

const mostrarResposta = (index, resposta) => {
    const respostaCorreta = document.getElementById(`resposta-correta${index}`)
    const respostaErrada = document.getElementById(`resposta-errada${index}`)
    const respostas = document.getElementsByName(`pergunta${index}`)
    if (respostas[resposta].checked) {
        respostaCorreta.style.display = 'block'
        respostaErrada.style.display = 'none'
        listaDeResultados[index - 1] = true
    } else {
        respostaCorreta.style.display = 'none'
        respostaErrada.style.display = 'block'
        listaDeResultados[index - 1] = false
    }
}

const enviarRespostas = () => {
    const respostas = document.querySelectorAll('input')
    const error = document.getElementById('error')
    let numeroDeRespostasMarcadas = 0
    respostas.forEach((resposta)=>{
    if(resposta.checked){
        numeroDeRespostasMarcadas += 1
    }
    })
    if(numeroDeRespostasMarcadas == 10) {
        for (let i = 0; i<10;i++) {
            document.getElementsByClassName('resultado')[i].style.opacity = '1'
        }
        error.style.display = "none"
        gerarResultadoFinal()
    } else {
        error.style.display = "flex"
    }
}

const gerarResultadoFinal = () => {
    let numeroDeAcertos = 0
    const resultadoFinal = document.getElementById('resultadoFinal')
    let dadosResultadosFinal = document.getElementById('dadosDoResultadoFinal')
    let textoResultadoFinal = document.getElementById('textoDoResultadoFinal')
    listaDeResultados.forEach(resposta => {
        if (resposta) numeroDeAcertos += 1
    });
    if (numeroDeAcertos > 7) {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 10 perguntas`
        textoResultadoFinal.innerHTML = "Parabéns! Você pode se considerar um verdadeiro gamer raiz."
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    } else if (numeroDeAcertos > 4) {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 10 perguntas`
        textoResultadoFinal.innerHTML = "Você foi bem, mas poderia ter ido melhor."
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    } else {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 10 perguntas`
        textoResultadoFinal.innerHTML = "Talvez esteja na hora de você buscar conhecer um pouco mais sobre a história dos video games."
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    }
}

const mostrarRespostasCertas = () => {
    const resposta1 = document.querySelectorAll('input[name="pergunta1"] ~ label')[3].style.color = 'green'
    const resposta2 = document.querySelectorAll('input[name="pergunta2"] ~ label')[3].style.color = 'green'
    const resposta3 = document.querySelectorAll('input[name="pergunta3"] ~ label')[0].style.color = 'green'
    const resposta4 = document.querySelectorAll('input[name="pergunta4"] ~ label')[2].style.color = 'green'
    const resposta5 = document.querySelectorAll('input[name="pergunta5"] ~ label')[0].style.color = 'green'
    const resposta6 = document.querySelectorAll('input[name="pergunta6"] ~ label')[2].style.color = 'green'
    const resposta7 = document.querySelectorAll('input[name="pergunta7"] ~ label')[0].style.color = 'green'
    const resposta8 = document.querySelectorAll('input[name="pergunta8"] ~ label')[1].style.color = 'green'
    const resposta9 = document.querySelectorAll('input[name="pergunta9"] ~ label')[1].style.color = 'green'
    const resposta10 = document.querySelectorAll('input[name="pergunta10"] ~ label')[2].style.color = 'green'
}
