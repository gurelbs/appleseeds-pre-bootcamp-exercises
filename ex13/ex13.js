let rl = require('readline-sync');

let str = rl.question('\nplease write somthing:\t', {
    limit: /^[a-zA-Z\s]*$/,
    limitMessage: `\ninvalid. please try again...`
});

let longest = () => {
    let words = str.split(' ').sort((a,b) => b.length - a.length);
    let longest = words[0];
    let space = '--------------------------------------------------------------------------------'
    console.log(`\n${space}\nyour string: ${str}\n\nthe longest word in your string, is the word: ${longest} - with ${longest.length} characters.\n${space}`);
}
longest()
