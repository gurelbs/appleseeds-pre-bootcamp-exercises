let rl = require('readline-sync');
chalk = require('chalk'),
console.log(chalk.black.bold.bgYellow('\n    Wellcome to Game of War!    \n'));
let name = rl.question('What is your name?\t', {
    limit: name => name.length > 0,
    limitMessage: `please type your name!`
})
let start = rl.keyIn(`\nhey ${name}!\t ready to play?\t [Y/N]`, {
    limit: '$<yn>'
})
if (start === 'y'){
    console.log(`\ngreat choose ${name}!\n\nin this game you can win or you can lose... \nfor start i will give you 50 ILS. if you'r lose - you out! `);
} else if (start === 'n') console.log(`\nGoodbye`)
