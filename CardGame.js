// Dependencies
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard');
var questions = require('./questions.js');

// Answers right / wrong 
var correct = 0;
var incorrect = 0;
// Current question
var curr = 0;


// Questions
var clozeQuestions = [];

// Populate questions from ClozeCard.js
for (i = 0; i < questions.length; i++) {
    var q = ClozeCard(questions[i].text, questions[i].cloze);
    clozeQuestions.push(q);
}

function askNext() {
    inquirer.prompt([
        {
            type: 'input',
            message: clozeQuestions[curr].partial + '\nAnswer: ',
            name: 'userGuess'
        }
    ]).then(function(answers){
        console.log('\n');

        if (answers.userGuess === clozeQuestions[curr].cloze) {
            console.log('YEAH BOI!');
            correct++;
            console.log('Correct Answer: ' + questions[curr].text);
            console.log('==============================');
        } else {
            console.log('INCORRECT. HAVE YOU EVEN WATCHED THE SHOW???');
            incorrect++;
            console.log('Correct Answer: ' + questions[curr].text);
            console.log('==============================');
        }
        
        if (curr < clozeQuestions.length) {
            curr++;
            askNext();
        } else {
            console.log('IT\'S ALL OVER!');
            console.log('You got ' + correct + ' correct answers');
            console.log('You got ' + incorrect + ' incorrect answers');
            console.log('==============================\n');

            inquirer.prompt([
                {
                    type: 'confirm',
                    message: 'Play Again?',
                    name: 'playAgain'
                }
            ]).then(function(answers) {
                if (answers.playAgain) {
                    curr = 0;
                    correct = 0;
                    incorrect = 0;

                    askNext();
                } else {
                    console.log('FINE, BE LIKE THAT.')
                }
            });
        }

    });
};
askNext();



