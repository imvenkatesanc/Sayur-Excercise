// Problem #2
// Read a passage from a file. 
// Count the number of times the word 'the' followed by another 'the' without 'a' in between.
// Eg The king went to the forest with the wife and a servernt. The king shot a deer. The king went to the forest again the next day.answer is 4 (The king, the forest, The King the next).

const fs = require('fs');

function main(){

    const pathForFile = '.lstext.txt';

    try {
        let text = fs.readFileSync( pathForFile,'utf-8');
        let words = text.split(/\s+/);
        let count = 0;
        // console.log(words);
        for (let i = 0; i < words.length - 2; i++) {
        // Check for 'the' followed by another 'the' without 'a' in between
            if (words[i].toLowerCase() === 'the' && words[i + 1].toLowerCase() !== 'a') {
                count++;
            }
        }
        console.log("'the' followed by another 'the' without 'a' in between: "+count);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`File not found at path: ${pathForFile}`);
        } else {
            console.error(`An error occurred: ${error.message}`);
        }
    }
}

main();