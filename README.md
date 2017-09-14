# flashcard-generator
Generate your own flashcards with the API or play the flashcard game.

## Getting Started
These instructions will help you get a copy of flashcard-generator up and running on your machine in no time! 

### Dependencies
You will need to install Inquirer to write your own flashcards
```
npm install inquirer
```

Alternatively, you can install all dependencies from ```package.json``` by simply running the following command
``` 
npm install
```

## How to use flashcard-generator
- There are two basic constructors within flashcard-generator that allow you to make two different types of cards

- Please note that you do not need to use 'new' with these objects due to the Safe Scope code within the constructors

The first card is a ```BasicCard``` that allows you to create a cheat sheet or study guide for your users. Create these cards by using:
```
var <cardName> = BasicCard(<front>, <back>);
```

The second card is a ```ClozeCard``` read more about cloze tests [here](https://en.wikipedia.org/wiki/Cloze_test). Call these cards by using:
```
var <cardName> = ClozeCard(<text>, <cloze>);
```

## Play the game
If you would like to see how flashcard-generator works in action you can run the game through your console. While within your local repository call the following command:
```
node CardGame.js
```


