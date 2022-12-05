const container = document.getElementById('container');
let squares;
const pares = [];
const impares = [];
let collumn1;
let collumn2;
let collumn3;
let collumn4;
let collumn5;


const gerarQuadrados = () => {
    for(let i=0; i< 25;i++) {
        const element = document.createElement('div')
        element.className = 'square'
        element.setAttribute("onClick", "mudarCor(this)")

        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        element.style.backgroundColor = `rgb(${r},${g},${b})`
        container.appendChild(element)
    }
    squares = Array.from(document.querySelectorAll('.square'));
    collumn1 = [squares[0], squares[5], squares[10], squares[15], squares[20]];
    collumn2 = [squares[1], squares[6], squares[11], squares[16], squares[21]];
    collumn3 = [squares[2], squares[7], squares[12], squares[17], squares[22]];
    collumn4 = [squares[3], squares[8], squares[13], squares[18], squares[23]];
    collumn5 = [squares[4], squares[9], squares[14], squares[19], squares[24]];
    impares.push(collumn1, collumn3, collumn5)
    pares.push(collumn2, collumn4)
}

const mudarCor = (square) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    square.style.backgroundColor = `rgb(${r},${g},${b})`
}

const ColorirPares = () => {
    pares.forEach(collumn => {
        colorirColuna(collumn, 'blue')
    })
}

const ColorirImpares = () => {
    impares.forEach(collumn => {
        colorirColuna(collumn, 'red')
    })
}

const colorirColuna = (collumn, cor) => {
    console.log(collumn)
    collumn.forEach(row => {
        row.style.backgroundColor = cor;
    })
} 

gerarQuadrados();
