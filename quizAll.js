let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);
const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];


const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

phoneticAlphabet.splice(2, 0, "Charlie");
console.log(phoneticAlphabet);
function multiply(num) {
    total = num * num;
}

//const result = multiply(3);
try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}


const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];
console.log(artistsAndSongs);
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}