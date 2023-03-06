'use strict'


 function randomNumbers(min, max){
   let numeri = [];
   while (numeri.length < 5){
    const i = Math.floor(Math.random() * (max - min + 1) + min);

   if (!numeri.includes(i)){
    numeri.push(i);
   }
}
   
return numeri;
 }
const iMax=100;
const iMin=1;
const numeri = randomNumbers(iMax,iMin)
 console.log(numeri)
 