// 
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

// Problem #2
// Same as above.
// Input two numbers.
// Print which number has less steps to reach 1.

// #Problem #3
// Get a input. Create a sequence of numbers from that input using the above alg.
// Find the largest number in the sequence. 

const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number: ", (num)=>{
    let sequence = [num];
    while(num!==1){
        // might be even number
        if(num%2==0){
            num = num /2;
        } else{
            // might be odd number
            num = num*3+1;
        }

        sequence.push(num);
    }
    console.log("Collatz Sequence: " +sequence.splice(','));
    rl.close();
});