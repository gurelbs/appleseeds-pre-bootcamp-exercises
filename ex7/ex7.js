var readline = require('readline-sync');

let num = readline.question('\nplease enter a number (more then 0):\t', {
    limit: num => num >= 1,
    limitMessage: '\nSorry, $<lastInput> is not a valid number. try again'
  })
  let userNum = num;
  for (let i = num - 1; i >= 1; i--){
      num *= i;
  }
  let space = `--------------------------`
  console.log(`\n${space}\nthe result for ${userNum}! is:\n\n\t${num}\n${space}`);