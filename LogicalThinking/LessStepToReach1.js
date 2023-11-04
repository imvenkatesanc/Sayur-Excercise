// Problem #2
// Same as above.
// Input two numbers.
// Print which number has less steps to reach 1.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num1, num2;

rl.question("Enter the first number: ", (input1) => {
    num1 = parseInt(input1);

    rl.question("Enter the second number: ", (input2) => {
        num2 = parseInt(input2);

        const steps1 = collatzSteps(num1);
        const steps2 = collatzSteps(num2);

        console.log(`Collatz Sequence for ${num1}: ${steps1}`);
        console.log(`Collatz Sequence for ${num2}: ${steps2}`);

        if (steps1 < steps2) {
            console.log(`${num1} takes fewer steps to reach 1.`);
        } else if (steps2 < steps1) {
            console.log(`${num2} takes fewer steps to reach 1.`);
        } else {
            console.log(`${num1} and ${num2} take the same number of steps to reach 1.`);
        }

        rl.close();
    });
});

function collatzSteps(num) {
    let steps = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        steps++;
    }
    return steps;
}
