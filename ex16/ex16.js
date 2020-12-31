let rl = require('readline-sync');

let reverse = () => {
    let arr1 = rl.question(`\nplease write some integers numbers and I'll reverse it for you:\t`, {
        limit: /^[\d+\s]*$/,
        limitMessage: `\ninvalid. please try again...`
    });
    let split = arr1.split(' ').map(digit => +digit).reverse();
    console.log(split);
}
reverse()
