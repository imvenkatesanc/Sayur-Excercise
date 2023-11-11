// 1. Write a function to calculate compund interest. Help the user save money by displaying the interest they 
// can earn by saving certain % of thier salary, for 3 different interest rates and for 3 different % of salary
// eg
//   Input Rs50000
//   Output - If you save 10% of your salary, with 5% interest rate, you will get (display the amount)
//            If you save 10% of your salary, with 6.5% interest rate, you will get (display the amount)

//            If you save 15% of your salary, with 5% interest rate, you will get (display the amount)
//            If you save 15% of your salary, with 6.5% interest rate, you will get (display the amount)

//            If you save 15% of your salary, with 5% interest rate, you will get (display the amount)
//            If you save 15% of your salary, with 6.5% interest rate, you will get (display the amount)

// 1.1 - Display the data from the above problem in a table format.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter your Salary: ", (amount) =>{
    let salary = parseFloat(amount);

    let arrOfSaves = [0.1,0.15,0.20];
    let arrOfInterests = [0.05,0.065];

    for(let arrOfSave of arrOfSaves){
        for(let arrOfInterest of arrOfInterests){
            let saveAmount = arrOfSave * salary; // Calculate savings based on percentage
            let finalAmount = saveAmount * (1 + arrOfInterest);
            console.log(`If you save ${arrOfSave * 100}% of your ${salary}, with ${(arrOfInterest * 100).toFixed(2)}% interest rate, you will get $${finalAmount.toFixed(2)}`);
        }
    }
    rl.close();
});