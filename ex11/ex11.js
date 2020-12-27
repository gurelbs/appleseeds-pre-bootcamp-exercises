let readline = require('readline-sync');

let str = readline.question('\nplease write something:\t', {
    limit: str => str.length > 1,
    limitMessage: `Sorry, '$<lastInput>' it's not valid. You must type at least 2 characters. try again...`
})

let checkIfPalindrom = () => {
    if (str === str.split('').reverse().join('')){
        console.log(`YES! it's palindrome`);
    } else {
        console.log(`NO... it's not a palindrome :(`);
    }
}
checkIfPalindrom()