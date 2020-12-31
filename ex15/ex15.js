let rl = require('readline-sync');

let connected = () => {
    let arr1 = rl.question('\n1.\tplease write somthing:\t', {
        limit: /^[a-zA-Z0-9\s]*$/,
        limitMessage: `\ninvalid. please try again...`
    });
    arr1 = arr1.split(' ');

    let arr2 = rl.question('\n2.\tplease write somthing again:\t', {
        limit: /^[a-zA-Z0-9\s]*$/,
        limitMessage: `\ninvalid. please try again...`
    });
    arr2 = arr2.split(' ');

    let newArr = (arr1, arr2) => {
        return [...arr1,...arr2].filter(Boolean)
    }

    let connectedArr = newArr(arr1,arr2)
    let space = `_______________________\n`
    console.log(`${space}\nHere is the connected array: (without any empty elements)\n`);
    console.log(connectedArr);
}

connected()