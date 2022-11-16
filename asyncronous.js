// const orderCoffee = callback => {
//     let coffee = null;
//     console.log("Sedang membuat kopi silahkan tunggu")
//     setTimeout(() => {
//         coffee = "kopi sudah jadi";
//         callback(coffee);
//     },3000);
    
// }
// orderCoffee (coffee => {
//     console.log(coffee);
// })


//callback hell fungsi bersarang
// const makeACake = rawIngredients => {
//     const ingredients = collectIngredients(rawIngredients);
//     dough = makeTheDough(ingredients);
//     pouredDough = pourDough(dough);
//     cake = bakeACake(pouredDough);
//     console.log(cake);
// }
// makeACake("soda")
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}

//promise
// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakeReady = true;
//     if(isCoffeeMakeReady) {
//         resolve("kopi sudah berhasil dibuat");
//     }
//     else{
//         reject("kopi belum dibuat")
//     }

// }
// const makeCoffe = () =>{
//     return new Promise(executorFunction);
// }
// const coffee = makeCoffe();
// console.log(coffee)

//consuming promise menjalakankan sekaligus
const stock = {
    coffeeBeans : 250,
    water : 1000
}

// const checkStock = () => {
//     return new Promise ((resolve, reject) => {
//         if (stock.coffeeBeans >=16 && stock.water >=250){
//             resolve("kopi dapat dibuat");
//         }
//         else{
//             reject("kopi belom bisa dibuat")
//         }
//     })
// }

// const handleSuccess = resolveValue => {
//     console.log(resolveValue);
// }
// const handleFailure = rejectValue => {
//     console.log(rejectValue);
// }

// checkStock().then(handleSuccess,handleFailure);

//chaining promise membuat task dengan urutan yang sesuai 

const state = {
    
    stock : {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy : false
}
const checkAvailablity = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy){
                resolve("mesin siap digunakan");
            }else{
                reject("mesin belum siap digunakan");
            }
        }, 1000);
    })
}

const checkStock = () => {
    return new Promise((resolve,reject) =>{
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if(state.stock.coffeeBeans >=16 && state.stock.coffeeBeans >=250){
                resolve("stock cukup, dapat membuat kopi");
            }
            else{
                reject("stock tidak cukup, belom bisa membuat cofee");
            }
        }, 1000);
    })
}
const boilWater = () => {
    
    return new Promise((resolve,reject) => {
        console.log("memasak air ...");
        setTimeout(() => {
            resolve("air panas sudah siap");
        }, 1500);
    });
}
const grindCoffeeBeans = () => {
    return new Promise ((resolve,reject) => {
        console.log("Menggiling biji kopi");
        setTimeout(() => {
            resolve("Bubuk Biji sudah siap")
        }, 1500);
    })
}
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
const makeEspresso = () =>{
    checkAvailablity()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) =>{
            console.log(value);
            const promise = [boilWater(), grindCoffeeBeans()];
            return Promise.all(promise);
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value)
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason =>{
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        })
}
makeEspresso()

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}
// async function makeCoffee(){
//     const coffee = await getCoffee();
//     console.log(coffee);
// }
// makeCoffee();
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeCoffee();