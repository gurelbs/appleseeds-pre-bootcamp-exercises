var readline = require('readline-sync');

let numberOfPeople =  readline.question('\nplease enter a number more then 10:\t', {
    limit: num => num > 10,
    limitMessage: '\nSorry, $<lastInput> is not valid number. try again'
  })
console.log(`Good! your number is more then 10!`);