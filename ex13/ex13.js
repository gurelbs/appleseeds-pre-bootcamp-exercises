let rl = require('readline-sync');

let userString = rl.question('\nplease write somthing:\t',{limit: str => str.length > 0, limitMessage:`\nyou can't check empty string...`});
let err = `invalid\n(You have probably tried to test only a string that contains numbers, symbols, or spaces)`

let longestWord = str => {
    let newArr = []
    let regEx = /^[a-zA-Z]*$/
    let strToArr = str
        .split(' ')
        .sort((a,b) => b.length - a.length);
    strToArr.forEach(element => {
        if (regEx.test(element) === true){
            newArr.push(element)
        } 
    });
    if (strToArr !== ([] || undefined)){
        newArr
        .filter(Boolean)
        .sort((a,b) => b.length - a.length);
    }
        return newArr[0] === undefined ? err : newArr[0]  
}
let longest = longestWord(userString)
let space = '--------------------------------------------------------------------------------'
if (longest !== err) {
    console.log(`\n${space}\n\nthe longest word in your string, is the word:\t${longest}\n\n${space}`);
} else {
    console.log(err);
}
