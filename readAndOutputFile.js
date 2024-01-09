const fs = require('fs'); // Importing the fs module

// Function to read a file and output its contents
function readAndOutputFile(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        console.log(`Contents of ${filename}:`, content);
    } catch (error) {
        console.error(`Error reading file ${filename}:`, error.message);
    }
}

module.exports = readAndOutputFile;
