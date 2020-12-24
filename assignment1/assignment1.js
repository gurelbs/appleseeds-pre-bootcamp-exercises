const readline = require('readline-sync');

const quiz = () => {
    const spaceing = '------------------------------------------------------------';
    let question1Options = ['Why do I have to get up?...', 'Am I still dreaming?', 'coffee!', 'I do not think at all'];
    let question2Options = ['Neither alive or dead', 'There is no such thing', 'All people are zombies. Except for the people who think', 'Deads'];
    let question3Options = ['Physical', 'both', 'spiritual!', 'Neither'];
    let question4Options = ['Is it possible to divide an infinity?', 'Everything', 'pure Nothing', 'the big Bang'];
    let question5Options = [ `I'm a scientist. Scientists do not believe in God`, 'God is an invented concept', 'God is love', 'God is everything'];

    console.log(`\nhello! Wellcome to the philosopher quiz!\n\n${spaceing}\n\tWhat kind of philosopher are you?\n${spaceing}`.toUpperCase());
    console.log('\n\tquestion 1:'.toUpperCase());
    question1 = readline.keyInSelect(question1Options, `\n\tWhat's the first thing you think of in the morning?`);
    console.log('\n\tquestion 2:'.toUpperCase());
    question2 = readline.keyInSelect(question2Options, `\n\tZombies. Do you love them alive or dead?`);
    console.log('\n\tquestion 3:'.toUpperCase());
    question3 = readline.keyInSelect(question3Options, `\n\tIs your soul spiritual or physical?`);
    console.log('\n\tquestion 4:'.toUpperCase());
    question4 = readline.keyInSelect(question4Options, `\n\tWhat happens when you divide infinity?`);
    console.log('\n\tquestion 5:'.toUpperCase());
    question5 = readline.keyInSelect(question5Options, `\n\tDoes God exist?`);

    let score1 = 0,score2 = 0,score3 = 0,score4 = 0,score5 = 0; //total: 100-400

    const calcScore = () => {
        let question1Score = () => {
            switch (question1){
                case 0:
                    score1 += 20;
                    break;
                case 1:
                    score1 += 40;
                    break;
                case 2:
                    score1 += 60;
                    break;
                case 3:
                    score1 += 80;
                    break;
                default:
                    score1 += 0
            }
        }
        let question2Score = () => {
            switch (question2){
                case 0:
                    score2 += 20;
                    break;
                case 1:
                    score2 += 40;
                    break;
                case 2:
                    score2 += 60;
                    break;
                case 3:
                    score2 += 80;
                    break;
                default:
                    score2 += 0
            }
        }
        let question3Score = () => {
            switch (question3){
                case 0:
                    score3 += 20;
                    break;
                case 1:
                    score3 += 40;
                    break;
                case 2:
                    score3 += 60;
                    break;
                case 3:
                    score3 += 80;
                    break;
                default:
                    score3 += 0
            }
        }
        let question4Score = () => {
            switch (question4){
                case 0:
                    score4 += 20;
                    break;
                case 1:
                    score4 += 40;
                    break;
                case 2:
                    score4 += 60;
                    break;
                case 3:
                    score4 += 80;
                    break;
                default:
                    score4 += 0
            }
        }
        let question5Score = () => {
            switch (question5){
                case 0:
                    score5 += 20;
                    break;
                case 1:
                    score5 += 40;
                    break;
                case 2:
                    score5 += 60;
                    break;
                case 3:
                    score5 += 80;
                    break;
                default:
                    score5 += 0
            }
        }
        question1Score()
        question2Score()
        question3Score()
        question4Score()
        question5Score()
        let finelScore = score1 + score2 + score3 + score4 + score5;
        let philosopher = '';
        const answer = () => {
            if (finelScore <= 150){
                philosopher = 'You are special. Not many think like you but the philosopher - Friedrich Nietzsche - Would agree with you';
            } else if (finelScore > 150 && finelScore < 200) {
                philosopher = 'You have an original thought. similar to the great philosopher - David Chalmers!'
            } else if (finelScore >= 200 && finelScore < 250) {
                philosopher = `From ancient Greece, to our day. You're just like... - Aristotle!`
            } else if (finelScore >= 250 && finelScore < 300) {
                philosopher = `Hmmm, that's a little hard but I could guess you're just like the philosopher - Moses ben Maimon -`
            } else if (finelScore >= 300 && finelScore < 350) {
                philosopher = `All the Rivers Run... You are Platon!`
            } else if (finelScore >= 350 && finelScore <= 400) {
                philosopher = 'classic... You remind me the classical Greek philosopher - Socrates!'
            }
            console.log(`${spaceing}\n\tQuiz results\n${philosopher}\n${spaceing}`)
        }
        answer()

    }
    calcScore()
}
quiz()