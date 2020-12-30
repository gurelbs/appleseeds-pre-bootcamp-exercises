let rl = require('readline-sync');

let str = rl.question('please write somthing:\t', {
    limit: str => str.length > 0,
    limitMessage: `you didn't type anything.... please try again`
});

let longest = () => {
    let words = str.split(' ').sort((a,b) => b.length - a.length);
    let longest = words[0];
    let space = '--------------------------------------------------------------------------------'
    console.log(`\n${space}\nthe longest word in you'r string, is the word: ${longest} - with ${longest.length} characters.\n${space}`);
}
longest()
