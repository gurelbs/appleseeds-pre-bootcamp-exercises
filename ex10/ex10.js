let readline = require('readline-sync');

let str = readline.question('\nplease write something:\t', {
    limit: str => str.length > 0,
    limitMessage: `Sorry, $<lastInput> you didn't type anything. try again...`
  })
console.log(`\nhere is you'r new output:\n`);
console.log(str.split(' ').join('*'));