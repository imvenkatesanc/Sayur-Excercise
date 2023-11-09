// Problem #1
// Write a program for Collatz_conjecture.
// Collatz_conjecture means -  start with the input number. 
// For even number , divide by 2 (n/2)
// For odd number - 3n + 1
// apply the above for the result number until the answer is 1.

// Eg, input is 8
// 8, 4,2, 1
// input is 9
// 9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1

const rd = require('readline');
const rl = rd.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter number1: ",(number1)=>{
    let num1 = parseInt(number1);
    rl.question("Enter number2: ",(number2)=>{
        let num2 = parseInt(number2);

        const steps1 = collatz(num1);
        const steps2 = collatz(num2);

        if(steps1<steps2){
            console.log(`${num1} is fewer steps to reach 1`);
        } else if(steps2<steps1){
            console.log(`${num2} is fewer steps to reach 1`);
        }else{
            console.log(`${num1} and ${num2} has equal steps to reach 1`);
        }
    
    rl.close();
    });
});

function collatz(num){
    let sequence =[];
    let steps = 0;
    while (num!==1) {
        if (num%2==0) {
            num = num/2;
        } else{
            num=num*3+1;
        }
        sequence.push(num);
        steps++;
    }
    console.log(`steps for given number:${sequence}`);
    return steps;
}