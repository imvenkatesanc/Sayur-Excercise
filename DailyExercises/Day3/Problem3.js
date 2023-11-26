// Problem #3
// From the same file as above, read from the file, count the number of unique 4 letter words and it no of occurrences
// for each word. Write this information at the end of file under the heading "Summary of 4 letter words"

// For problem 2 and 3,
// Make sure your code includes exception handling for reading from a file.
// Reading material for exception handling - https://www.w3schools.com/python/python_try_except.asp
// Video https://youtu.be/83Y2qZvWxdE?si=g2MB45bZHI8-ah5q

const fs = require('fs');

function main(){
    const pathForFile = './text.txt';
    try {
        let text = fs.readFileSync(pathForFile,'utf-8');

        const words = text.split(/\s+/);
        const fourLetterWords = {};
    
        words.forEach(word => {
            const cleanedWord = word.toLowerCase().replace(/[.,!?]/g, ''); // Remove punctuation and convert to lowercase
            if (cleanedWord.length === 4 && /^[a-zA-Z]+$/.test(cleanedWord)) {
                fourLetterWords[cleanedWord] = (fourLetterWords[cleanedWord] || 0) + 1;
            }
        });
        
        // Write the summary to the end of the file
        const summary = '\n\nSummary of 4 letter words:\n' + Object.entries(fourLetterWords).map(([word, count]) => `${word}: ${count} occurrences`).join('\n');

        fs.appendFileSync(pathForFile, summary, 'utf-8');
        console.log("Summary of 4 letter words written to the file.");

    } catch (error) {
        if (error.code==='ENOENT') {
            console.log(`File not found at path: ${pathForFile}`);
        }else{
            console.error(`Error occured: ${error.message}`);
        }
    }
}

main();