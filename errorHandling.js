// let json = '{"age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     if(!user.name){
//         throw new SyntaxError("'name' is required");
//     }
// } catch (error) {
//     console.log(`JSON error : ${error.message}`);
// }

//untuk  mengatasi supaya tidak error dan bener
class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
let json = '{ "age": 20 }';
try {
    
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
    
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON error : ${error.message}`);
    } else if (error instanceof ReferenceError){
        console.log(error.message);

    }else if (error instanceof validationError) {
        console.log(`Invalid data: ${error.message}`);
    }
    else{
        console.log(error.stack);
    }
}
