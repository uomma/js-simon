'use strict'

//genero 5 numeri random diversi
function randomNumbers(min, max) {
    let numeri = [];
    while (numeri.length < 5) {
        const i = Math.floor(Math.random() * (max - min + 1) + min);

        if (!numeri.includes(i)) {
            numeri.push(i);
        }
    }

    return numeri;
}


const iMax = 100;
const iMin = 1;
const numeri = randomNumbers(iMax, iMin);
console.log(numeri);

//stampo in pagina i numeri
const header = document.getElementById("yo");
header.innerHTML = 'i numeri da memorizzare sono  ' + numeri;

setTimeout(hideNumbers, 3000);

function hideNumbers(){
    header.innerHTML = '';
};


setTimeout(indovinaNumeri,3100)

function indovinaNumeri (numeri){
    let numeriPresi = [];
    let i = 0;
    while(i < 5){   
        const tuoNumero = Number(prompt(`inserisci il ${i+1}    numero che hai visualizzato`)) ;
        if(numeriPresi.includes (tuoNumero)){
            numeriPresi.push(tuoNumero);
        }   
        i++
    } 
    return numeriPresi
} 

