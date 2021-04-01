let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let symbol = ["&spades;", "&clubs;", "&hearts;", "&diams;"]


let headerS = document.getElementById('headerSymbol')
let numberC = document.getElementById('numberCard');
let footerS = document.getElementById('footerSymbol')

let random_number = Math.floor(Math.random() * number.length);
numberC.innerHTML = number[random_number]

let random_symbol = Math.floor(Math.random() * symbol.length)

window.onload = () => {
    if (symbol[random_symbol] === "&hearts;" || symbol[random_symbol] === "&diams;") {
        headerS.style.color = "red";
        footerS.style.color = "red";
        headerS.innerHTML = symbol[random_symbol];
        footerS.innerHTML = symbol[random_symbol];
    }
    else {
        headerS.innerHTML = symbol[random_symbol];
        footerS.innerHTML = symbol[random_symbol];
    }
}