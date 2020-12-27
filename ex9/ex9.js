var readline = require('readline-sync');

let num = readline.question('\nplease enter a number (more then 0):\t', {
    limit: num => num > 0,
    limitMessage: '\nSorry, $<lastInput> is not a valid number. try again'
  })
let counter = 0
let primeNumbers = () => {
    console.log(`\nhere is your prime numbers:`);
    for(let i = 1, notPrime = 0; i <= num; i++, notPrime = 0){
        for(let j = 2; j < i; j++) {
            if (i % j == 0){
                notPrime = 1
            } else {
                notPrime
            }
        }
        if(!notPrime){ //its prime
            console.log(i);
            counter +=1
        }
      }
}
primeNumbers()
let space = `----------------------------`;
console.log(`${space}\nTotal prime numbers from 1 to ${num}:\t ${counter} numbers!`);