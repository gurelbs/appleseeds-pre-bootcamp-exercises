let readline = require('readline-sync');

let str = readline.question('\nplease write something:\t', {
    limit: str => str.length > 0,
    limitMessage: `Sorry, '$<lastInput>' it's not valid. You must type at least 1 character. try again...`
})

let vowel = () => {
    console.log(`\nhere is you'r output:\n`);
    str = str.replace(/[aeiouy]/g, char => char.toUpperCase())
    console.log(str);
}
vowel()