// #Problem #3
// Get a input. Create a sequence of numbers from that input using the above alg.
// Find the largest number in the sequence.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number: ", (num) => {
    let sequence = [num];
    let largestNumber = num; // Initialize the largestNumber to the input value

    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        sequence.push(num);

        if (num > largestNumber) {
            largestNumber = num;
        }
    }

    console.log("Collatz Sequence: " + sequence.join(','));
    console.log("Largest Number in the Sequence: " + largestNumber);

    rl.close();
});
