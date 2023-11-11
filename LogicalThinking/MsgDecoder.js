// You have a message that you want to send to your friend. You don't want others to see the message. You code the message and send it.The alg to code is - split each word in half and reverse it (eg cricket becomes ketccri), if the word ends with a vowel, split at the last letter and reverse (eg cinema becomes acinem), if the word has numbers, spell the number but add A as first and last letters (8 pm becomes AeightA pm ).Write an app that can code and decode the message.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Give Your Message: ",(msg) =>{
    let message = msg;
    //const message = "venkat account number 1012100013146 and connected mobile number 6981881000";
    let wordsplit = message.split(/\s+/)
    let encodedStr = [];
    for(let i=0; i<wordsplit.length; i++){
    let splittedWord = wordsplit[i];
    const vowel ="a,e,i,o,u";
    if(splittedWord){
        let splittedWordHalf = Math.floor(splittedWord.length / 2);
        let firstHalf = splittedWord.slice(0, splittedWordHalf);
        let reversedFirstHalf = firstHalf.split('').reverse().join('');
        let remainWord = splittedWord.slice(splittedWordHalf);
        let everyWord = reversedFirstHalf.concat(remainWord);
        if(everyWord){
            const lastIndex = everyWord.lastIndexOf(vowel);
            // Split the string into two parts
            const firstPart = everyWord.slice(0, lastIndex + 1); // Include the character found
            const secondPart = everyWord.slice(lastIndex + 1);
            // Reverse the second part
            const reversedSecondPart = secondPart.split('').reverse().join('');
            // Join the parts back together
            const reversedString = firstPart + reversedSecondPart;
            encodedStr.push(reversedString);

            if (/^[0-9]+$/.test(reversedString)) { // If the word consists of only numbers
                const spelledNumber = spellNumber(reversedString);
                encodedStr.push("A" + spelledNumber + "A");
            }
        }
    }
}
console.log("Your Message Decoded: "+encodedStr.map(word => word.replace(/\b[0-9]+\b/g, '')).join(' '));
rl.close();
});

function spellNumber(number) {
    const numberMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };
    
    let spelledNumber = '';
    for (let i = 0; i < number.length; i++) {
        spelledNumber += numberMap[number[i]] + ' ';
    }
    
    return spelledNumber.trim();
}