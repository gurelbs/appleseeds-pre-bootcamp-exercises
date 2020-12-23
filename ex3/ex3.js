const readline = require('readline-sync');

const numToString = () => {
    const someNum = readline.question('\n Please enter a number between 0-9: \t')
    switch (someNum){
        case '1':
            console.log('\n\tOne'.toUpperCase());
            break;
        case '2':
            console.log('\n\ttwo'.toUpperCase());
            break;
        case '3':
            console.log('\n\tthree'.toUpperCase());
            break;
        case '4':
            console.log('\n\tfour'.toUpperCase());
            break;
        case '5':
            console.log('\n\tfive'.toUpperCase());
            break;
        case '6':
            console.log('\n\tsix'.toUpperCase());
            break;
        case '7':
            console.log('\n\tseven'.toUpperCase());
            break;
        case '8':
            console.log('\n\teight'.toUpperCase());
            break;
        case '9':
            console.log('\n\tnine'.toUpperCase());
            break;
        case '0':
            console.log('\n\tzero'.toUpperCase());
            break;
        default: 
            return '';
    }
}
numToString()