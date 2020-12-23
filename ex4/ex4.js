const readline = require('readline-sync');


const restaurantSelector = () => {
    let restaurantType = ['Italian', 'Chinese', 'American', 'French'];
    let numberOfPeople = readline.question('\nso...you want to eat something in Tel-aviv...\nHow many people are you going with?: \t')
    let kosher = readline.keyInYN('\nShould it be Kosher?: \t')
    if (kosher){
        var mehadrin = readline.keyInYN('\nshould it be Kashrut Lemehadrin?: \t')
    }
    chooseRestaurantType = readline.keyInSelect(restaurantType, 'which type of restaurant?');

    const restaurantTypeName = () => {
        if (chooseRestaurantType == 0) {
            return 'Italian restaurant';
        }
        else if (chooseRestaurantType == 1) {
            return 'Chinese restaurant';
        }
        else if (chooseRestaurantType == 2) {
            return 'American restaurant';
        }
        else if (chooseRestaurantType == 3) {
            return 'French restaurant';
        }
        else {
            return 'the restaurant';
        }
    }

    const kashrut = () => {
        if (kosher && mehadrin === true){
            return 'want to eat Kashrut Lemehadrin'
        } else if (kosher == true && mehadrin == false){
            return 'want to eat kosher'
        } else {
            return 'dont care about kashrut'
        }
    }
    const restaurantName = () => {
        if (chooseRestaurantType == 0){
            return 'Donatello Pizza'
        } else if (chooseRestaurantType == 1){
            return 'chooka'
        } else if (chooseRestaurantType == 2){
            return 'Burgers Bar'
        } else if (chooseRestaurantType == 3){
            return 'BRETONNE'
        } else {
            return 'mcdonalds'
        }
    }
    let answer = () => {
        console.log(`\nO.k! i see you want to eat with ${parseInt(numberOfPeople)} friends at ${restaurantTypeName()}.\nalso, you ${kashrut()}. \n\n\tMy recommendation is to go to ${restaurantName()}`);
    }
    answer()
}
restaurantSelector()
