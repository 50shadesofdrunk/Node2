const countLetterA = require('./countLetterA');
const countAllLetters = require('./countAllLetters');
const readAndOutputFile = require('./readAndOutputFile.js');

// Constants
const name = 'Jordan';
const sentence = 'This is the name of a chicken, named Ruby. She Loves to eat corn and have fun with her friends on Tuesdays';

// Output and function calls
console.log(name);
console.log(`Count of 'a' in '${name}':`, countLetterA(name));

console.log(sentence);
console.log(`Count of 'a' in the sentence:`, countLetterA(sentence));

console.log(`Letter counts in '${name}':`, countAllLetters(name));
console.log(`Letter counts in the sentence:`, countAllLetters(sentence));

// Example usage of readAndOutputFile
readAndOutputFile('word.txt');
