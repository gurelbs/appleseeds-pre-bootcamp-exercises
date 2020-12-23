const input = require('readline-sync');

const checkValue = () => {
    let num1 = parseInt(input.question("\n Hi! please Enter a number:"));
    let num2 = parseInt(input.question("\n Hi! please Enter a second number:"));
    return num1 + num2 == 10 
        ? 'makes 10' 
        : 'nope, try again' 
}
console.log(checkValue());