const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})

const calcButton = document.querySelector('.button_trade');
const calcSpan = document.querySelector('.trade__calc-info-total span');
const inputValue = document.querySelector('.trade__calc-input');
const currencySelector = document.querySelector('.trade__calc-select');

function getInput() {
    return {
        hase: inputValue.value,
        currency: currencySelector.value,
    }
}

function calcCryptoValue(result) {
    calcButton.addEventListener('click', () => {
        calcSpan.innerText = `($${result * 0.000028})`
    })
}

inputValue.addEventListener('input', () => {
    const result = convert(getInput())
    calcCryptoValue(result)
})

currencySelector.addEventListener('change', () => {
    const result = convert(getInput())
    calcCryptoValue(result)
})
