
let num = document.querySelector('.number-input')
let numberContainter = document.querySelector('.numeros')
let sorteadosContainter = document.querySelector('.sorteados')

num.focus()

let numeros = []
let sorteados = []

isNumero = (num) => num > 0 && Number.isInteger(num) ? true : false 

inSorteio = (num, array) => array.indexOf(Number(num)) != -1 ? true : false

adicionarAoSorteio = () => {
    if (isNumero(Number(num.value))) {
        if (inSorteio(num.value, numeros) && inSorteio(num.value, sorteados))  {
            alert('Número já adicionado ao sorteio')
            num.value = ''
            num.focus()
        } else {
            let novoNumero = Number(num.value)
            numeros.push(novoNumero)
            numberContainter.innerHTML = ''
            numeros.forEach(cur => numberContainter.insertAdjacentHTML('beforeend', `<div class="number">${cur}</div>`))
            num.value = ''
            num.focus()
        }
    } else {
        alert('Digite um número válido')
        num.value = ''
        num.focus()
    }
}

sortear = () => {
    if (numeros.length === 0) {
        alert('Adicione números ao sorteio')
        num.focus()
        sorteados = []
    } else {
        i = Math.floor(Math.random() * numeros.length)
        sorteados.push(numeros[i])
        numeros.splice(i, 1)
        sorteadosContainter.innerHTML = ''
        sorteados.forEach(cur => sorteadosContainter.insertAdjacentHTML('beforeend', `<div class="number">${cur}</div>`))
        numberContainter.innerHTML = ''
        numeros.forEach(cur => numberContainter.insertAdjacentHTML('beforeend', `<div class="number">${cur}</div>`))
        num.value = ''
        num.focus()
    }
}

remover = () => {
    if (numeros.indexOf(Number(num.value)) === -1) {
        console.log('Número não está no sorteio')
    }
    for (var i = 0; i <= numeros.length; i++) {
        if (numeros[i] === Number(num.value)) {
            numeros.splice(i, 1);
            console.log(`Números a serem sorteados: ${numeros}`)
            num.value = ''
            num.focus()
        }
    }
}

limpar = () => {
    num.value = ''
    num.focus()
    numeros = []
    sorteados = []
    numberContainter.innerHTML = ''
    sorteadosContainter.innerHTML = ''
}

document.querySelector('.btn-adicionar').addEventListener('click', adicionarAoSorteio)
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 || event.which === 13) {
        adicionarAoSorteio()
    }
})
document.querySelector('.btn-sortear').addEventListener('click', sortear)
document.querySelector('.reiniciar').addEventListener('click', limpar)





