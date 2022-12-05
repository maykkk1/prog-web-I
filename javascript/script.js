const img = document.getElementById('img')
const container = document.getElementById('container')
const botao = document.getElementById('botao')
img.src = "./images/sol.jpeg"

const mudarIMG = () => {
    botao.innerHTML === 'mudar para lua'
    ? anoitecer()
    : amanhecer()
}

const anoitecer = () => {
    img.src = './images/lua.png'
    botao.innerHTML = 'mudar para o sol'
    container.style.backgroundColor = 'black'
}

const amanhecer = () => {
    img.src = './images/sol.jpeg'
    botao.innerHTML = 'mudar para lua'
    container.style.backgroundColor = 'white'
}