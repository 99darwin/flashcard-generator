// Import BasicCard.js
var BasicCard = require('./BasicCard.js');

// ClozeCard constructor
function ClozeCard(text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
    this.fullText = text,
    this.cloze = cloze,
    this.partial = text.replace(cloze, '....')
};

// Add error log to ClozeCard constructor
ClozeCard.prototype.errorLog = function() {
    if (!this.cloze.includes(this.fullText)) {
        console.log('ERROR: This text contains cloze text.');
    }
};

// ==== Flash Cards ====
var whosAryaCloze = ClozeCard(
    'Arya Stark is no one',
    'no one'
);
console.log(whosAryaCloze.cloze);
console.log(whosAryaCloze.partial);
console.log(whosAryaCloze.fullText);

var tyrionKillCloze = ClozeCard(
    'Tyrion Lannister kills Tywin Lannister',
    'Tywin Lannister'
);
console.log(tyrionKillCloze.cloze);
console.log(tyrionKillCloze.partial);
console.log(tyrionKillCloze.fullText);
console.log('=================================');

var johnDog = ClozeCard(
    'John Snow\'s Direwolf is named Ghost',
    'Ghost'
);
console.log(johnDog.cloze);
console.log(johnDog.partial);
console.log(johnDog.fullText);
console.log('=================================');

var ravenBoy = ClozeCard(
    'Brandon Stark becomes the three eyed raven',
    'Brandon Stark'
);
console.log(ravenBoy.cloze);
console.log(ravenBoy.partial);
console.log(ravenBoy.fullText);
console.log('=================================');

var snowLife = ClozeCard(
    'The Lady in Red brings John Snow back to life',
    'The Lady in Red'
);
console.log(snowLife.cloze);
console.log(snowLife.partial);
console.log(snowLife.fullText);
console.log('=================================');

module.exports = ClozeCard;