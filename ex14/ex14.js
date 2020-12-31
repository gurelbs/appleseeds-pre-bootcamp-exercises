let rl = require('readline-sync');

let userNumber = rl.question('please Enter a number (more then 0)\t', {
    limit: name => name.match(/^[0-9]*$/) && name > 0,
    limitMessage: `invalid number`
})

userNumber = parseInt(userNumber);

let random = () => Math.floor(Math.random() * 50) + 1;

let arr = new Array(userNumber)

for (let i=0;i<userNumber;i++){
    arr[i] = random()
}
console.log(`\nhere is array with ${userNumber} random numbers:\n`);
console.log(arr);

let min = Math.min.apply(Math, arr);
let max = Math.max.apply(Math, arr);

console.log(`the minimum number in this array, is the number\t\t${min}\n\nthe maximum number in this array, is the number\t\t${max}`);