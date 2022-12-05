const tela = document.getElementById('tela');
const showScore = document.getElementById('pontos')
const showTime = document.getElementById('tempo')
let pontos = 0;
let time = 6;

const TEMPO_INICIO = 30;
const QNT_BANDEIRA = 28;

const iniciarJogo = () => {
    const intervalo = setInterval(() => {
        time--;
        showTime.innerHTML = time;
        if(time <= 0) {
            terminarJogo(intervalo)
            console.log("acabou")
        };
    }, 1000);
    for(let i=0;i < QNT_BANDEIRA; i++) {
        tela.innerHTML += `<div id="bandeira-wrapper" onClick="pegarBandeira(this)">
                                <img src="./imgs/coreia.png">
                            </div>`
    }
} 

const pegarBandeira = (bandeira) => {
    bandeira.firstElementChild.src = "./imgs/brasil.png";
    pontos++
    showScore.innerHTML = pontos;
}

const terminarJogo = (intervalo) => {    
    clearInterval(intervalo)
    window.alert(`O jogo terminou! Voce pegou ${pontos} bandeiras`)
    tela.innerHTML = "";
    showScore.innerHTML = 0;
    showTime.innerHTML = 5;
    pontos = 1;
    time = 6;
    iniciarJogo();
}






