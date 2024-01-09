// Function to count occurrences of each letter in a string
function countAllLetters(str) {
    const letterCounts = {};
    for (let i = 0; i < 26; i++) {
        letterCounts[String.fromCharCode(97 + i)] = 0; // 97 is the ASCII code for 'a'
    }

    for (let char of str.toLowerCase()) {
        if (letterCounts.hasOwnProperty(char)) {
            letterCounts[char]++;
        }
    }

    return Object.keys(letterCounts).map(letter => `${letter.toUpperCase()}: ${letterCounts[letter]}`);
}

module.exports = countAllLetters;
