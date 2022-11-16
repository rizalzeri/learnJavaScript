
import  { coffeeStock, isCoffeeMachineReady } from './state.js';
 
// const makeCoffee = (type,miligram) => {
//     if(coffeeStock[type] >= miligram){
//         console.log("Kopi berhasil dibuat");
//     }
//     else{
//         console.log("Kopi belum bisa dibuat");
//     }
// }
// console.log(isCoffeeMachineReady);
// makeCoffee("robusta", 80);
 
const displayStock = stock => {
    for (const type in stock){
        console.log(type);
    }
}
displayStock(coffeeStock);
console.log(isCoffeeMachineReady);