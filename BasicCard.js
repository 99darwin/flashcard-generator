function BasicCard(front, back) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }

    this.front = front,
    this.back = back
}

var whosArya = BasicCard(
    'Who is Arya Stark?', 
    'No one.'
);
console.log(whosArya.front);
console.log(whosArya.back);
console.log('=================================')

var tyrionKill = BasicCard(
    'What is the name of the family member that Tyrion Lannister killed?',
    'Tywin Lannister'
);
console.log(tyrionKill.front);
console.log(tyrionKill.back);
console.log('=================================');

var johnDog = BasicCard(
    'What is the name of John Snow\'s Direwolf?',
    'Ghost'
);
console.log(johnDog.front);
console.log(johnDog.back);
console.log('=================================');

var ravenBoy = BasicCard(
    'Who becomes the three eyed raven?',
    'Brandon Stark'
);
console.log(ravenBoy.front);
console.log(ravenBoy.back);
console.log('=================================');

var snowLife = BasicCard(
    'Who brings John Snow back to life?',
    'The Lady in Red'
);
console.log(snowLife.front);
console.log(snowLife.back);
console.log('=================================');

module.exports = BasicCard;