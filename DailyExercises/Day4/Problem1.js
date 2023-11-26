// Problem #1
// write a program that reads a passage and reverses the order of 
// letters in each word while keeping the word order intact. Use function.
// Eg- input - I am Sayur
// Output I ma ruyaS

function reverseWords(passage) {
    // Split the passage into words
    const words = passage.split(/\s+/);

    // Reverse the order of letters in each word
    const reversedWords = words.map(word => word.split('').reverse().join(''));

    // Join the reversed words back into a passage
    const reversedPassage = reversedWords.join(' ');

    // return reversedPassage;
    console.log(reversedPassage);
}

reverseWords('I am Sayur');