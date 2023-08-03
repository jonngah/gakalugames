const tela = document.querySelector("#aplicativo--botaoDireito");
tela.addEventListener("click", changeScreen);

const screen1 = document.querySelector(".app-screen-1");
const screen2 = document.querySelector(".app-screen-2");
const screen3 = document.querySelector(".app-screen-3");

let i = 0;

screen1.style.display = 'flex';
screen2.style.display = 'none';
screen3.style.display = 'none';

function changeScreen() {

    switch (i) {

        case 0:
            screen1.style.display = 'none';
            screen2.style.display = 'flex';
            screen3.style.display = 'none';
            i++
            break;

        case 1:
            screen1.style.display = 'none';
            screen2.style.display = 'none';
            screen3.style.display = 'flex';
            i++
            break;

        case 2:
            screen1.style.display = 'flex';
            screen2.style.display = 'none';
            screen3.style.display = 'none';
            i = 0
            break;

    }

};

let compra = document.querySelector("#botaoCompra")

compra.addEventListener('click', () =>{
    alert('Produto Esgotado! T-T')
});