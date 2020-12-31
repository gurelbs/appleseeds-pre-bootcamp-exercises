let rl = require('readline-sync');
chalk = require('chalk');

let startAmount = chalk.whiteBright.bold.bgBlue(` 50 ILS `); 

console.log(chalk.blue.bold.dim.bgWhiteBright(`\n\t          Wellcome to Game of War!          \n`));
let name = rl.question('What is your name?\t', {
    limit: name => name.match(/^[a-zA-Z\s]*$/) && name.length > 0,
    limitMessage: chalk.red(`Please type your name! (empty string and numbers are invalid)`)
})
let start = rl.keyIn(chalk.whiteBright.bold.underline.dim.bgBlackBright(`\nHey ${name}!  ready to play?   [Y/N] \t`), {
    limit: '$<yn>'
})
if (start === 'y'){
    console.log(`\ngreat choice ${name}!\n`);
    console.log(chalk.magentaBright.bold.underline.dim.bgWhiteBright(`  Rules of the Game:  \n`));
    console.log(chalk.yellowBright.bgBlack(`1.\tin this game you can win and you can lose... \n2.\tfor start i will give you ${startAmount}.\n3.\tif you'r broke - You're out!\n4.\tdon't type negative number or an amount You do not have\n` + '5.\thave fun!\n'.toUpperCase()));
} else if (start === 'n') {
    console.log(chalk.black.bold.bgWhiteBright(`\nGoodbye ${name}`));
    process.exit()
} 

let amount = 50;

let amountMsg = currentAmount => chalk.whiteBright.bold.bgBlue(`\n    Current amount: ${currentAmount} ILS    \n`)
let amountMsg2 = currentAmount => chalk.whiteBright.bold.bgBlue(` ${currentAmount} ILS `)

let gameStart = () => {
    console.log(amountMsg(amount));
    let bet = rl.question(`\nEnter your bet: \t`,{
        limit: /^\d+$/,
        limitMessage: chalk.red(`invalid.`.toUpperCase()+` use only positive numbers (between 1 to your amount)`)
    })
    parseInt(bet)
    let checkBet = () => {
        if (bet > amount || bet <= 0) {
            console.log(chalk.red.bold.underline(`invalid bet.`.toUpperCase()+`.\nGoodbye!`));
            process.exit()
        } else if (bet <= amount){ //valid bet
            let pcRandom = () => Math.floor(Math.random() * 12) + 1
            let pcResult = pcRandom()
            let userRandom = () => Math.floor(Math.random() * 12) + 1
            let userResult = userRandom()

            let randomShape = () => Math.floor(Math.random() * 4)
            let shapes = ['♥','♦','♠','♣']

            console.log(chalk.white.bold.italic.underline.bgBlack(`\nyour bet amount is ${bet}\n`));
            console.log(chalk.white.bold.underline.bgCyan(`  result:  \n`.toUpperCase()));
            console.log(chalk.blackBright.bold.underline.bgWhite(`\t\t My card: \t ${pcResult}${shapes[randomShape()]} \n\t\t your card: \t ${userResult}${shapes[randomShape()]} `));
            
        let betCalc = (bet, pcNum, userNum) => {
            if (pcNum > userNum) {
                console.log(chalk.red.bold.underline(`\nyou lose...`));
                return amount -= parseInt(bet);
            }
            else if (pcNum < userNum) {
                console.log(chalk.green.bold.underline(`\nNICE! you win!!!`.toUpperCase()));
                return amount += parseInt(bet);
            } else{
                console.log(chalk.blue.bold.underline.bgWhite(`\nit's draw! no one win... Please make another bet`));
                return gameStart()
            }
        }
        betCalc(bet,pcResult,userResult)
            console.log(amountMsg(amount));
            if (amount === 0){
                console.log(chalk.red(`${name}, you're broke... Goodbye!`));
                process.exit()
            } else if (amount > 0){
                let options = ['PLAY AGAIN!']
                let replay = rl.keyInSelect(options,`\nhey ${name}! , currently you heve ${amountMsg2(amount)}. what do you want to do?\t`,{cancel: `leave with ${amountMsg2(amount)}!`})
            if (replay === 0){
                return gameStart()
            } else {
                console.log(chalk.blue.bold.underline.bgWhite(`\nO.K ${name}, i'm already miss you!\n enjoy with your ${amountMsg2(amount)} ILS.\nGoodbye!`));
                process.exit()
                }
            }
        }
    }
    checkBet()
}
gameStart()