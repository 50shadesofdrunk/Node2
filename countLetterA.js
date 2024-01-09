// Function to count occurrences of 'a' in a string
function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

module.exports = countLetterA;
