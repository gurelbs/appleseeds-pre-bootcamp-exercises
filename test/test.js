let rl = require('readline-sync');
let figlet = require('figlet');
let chalk = require('chalk');
var randomWords = require('random-words');
let word = randomWords({ exactly: 1, maxLength: 10 })
let chalkColorsBlue = blue => chalk.whiteBright.bold.bgBlue(`${blue}`); 
let chalkColorsRed = red => chalk.whiteBright.bold.bgRed(`${red}`); 
let chalkColorsGreen = green => chalk.whiteBright.bold.bgGreen(`${green}`); 
let chalkColorsBlack = black => chalk.whiteBright.bold.bgBlack(`${black}`); 
let chalkColorsYellow = yellow => chalk.black.bold.bgYellow(`${yellow}`); 
let chalkColorsBlueBright = blue => chalk.white.underline.bold.bgBlueBright(`${blue}`); 

console.log(chalkColorsBlue(`\n\t\t\t\t   Wellcome to   `));
console.log(figlet.textSync('HANGMAN !', {
    font: 'Electronic',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: false
}));
console.log(chalkColorsBlack(`\nRules of the Game:\n`));
console.log(`1.\tYou have 10 attempts to guess the whole word.\n2.\tIf you guess one letter successfully, the number of attempts will remain the same.\n3.\tIf you try to guess the same wrong letter twice, you will lost one attempt, so don't do it...`);
let theWord = word[0]
let wordInArr = theWord.split('');
// the word is :
// console.log(theWord,theWord.length)

let attempts = 10;
let hiddenWord = theWord.replace(/./g,'*');
let hiddenWordArr = hiddenWord.split('');
console.log(chalkColorsBlueBright(`\n  Here's the word you need to guess:  \n\n${chalkColorsYellow(hiddenWord)}`))

let hangman = () => {

let guess = rl.question('\nWhat is your guess?\t', {
    limit: guess => guess.match(/^[a-zA-Z]*$/) && guess.length < 2 && guess.length > 0,
    limitMessage: chalk.red(`invalid! (empty string and numbers are invalid)\nyou have ${attempts} attempts\n`)
})
let handleGuess = () => {
    let checkLetter = () => {
        if (theWord.includes(guess.toLowerCase()) === false){
            if (attempts > 1) {
                console.log(chalkColorsRed(`\n nope...this letter does not appear in the word \n\n you have ${attempts-=1} attempts left \n`));
                console.log(chalkColorsBlueBright(`\n${hiddenWordArr.join('')}`));
                return hangman()
            } else {
                console.log(chalkColorsRed(`\n nope...this letter does not appear in the word \n\n you have ${attempts-=1} attempts left... \n`));
                console.log(chalkColorsBlack(`  game over!  `.toUpperCase()));
                process.exit()
            }
        } else {
            let getAllIndex = (arr,char) => {
                let index = [], i = -1;
                while ((i = arr.indexOf(char, i+1)) != -1){
                    index.push(i);
                }
                return index
            }
            let indexArr = getAllIndex(theWord,guess.toLowerCase());
            if (indexArr === []){
                console.log(chalkColorsRed(`\n nope...this letter does not appear in the word \n`));
            } 
            if (indexArr !== []){
                indexArr.forEach(e => {
                        hiddenWordArr[e] = wordInArr[e]
                })
                console.log(chalkColorsGreen(`\n  NICE! your guess is right!  `));
                console.log(chalkColorsBlueBright(`\n${hiddenWordArr.join('')}`));
                if (hiddenWordArr.join('').includes("*") && attempts > 0){
                    hangman()        
                } else {
                    console.log(chalkColorsYellow(`\n  well done! you win, and The Winner Takes It All!!!  `.toUpperCase()));
                }
            }
        }
    }
    checkLetter()
}
    handleGuess()
}
hangman()