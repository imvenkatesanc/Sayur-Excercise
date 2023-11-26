// Problem 1
// Print the following pattern
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1

// Observe how the nunmbers in the triangle are calculated. 
// Do it in two steps. Work on the generating the numbers first in right angle triangle
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// And then work on the final output using proper indendation

// Create an empty array to represent the triangle
let triangle = [];

// Loop through each row
for(let i = 0; i < 5; i++) {
    // Initialize an array for the current row
    triangle[i] = [];
    
    // Set the first element of the row to 1
    triangle[i][0] = 1;

    // Loop through the elements in the middle of the row (excluding the first and last)
    for(let j = 1; j < i; j++) {
        // Calculate the current element based on the sum of two elements from the previous row
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        // Uncomment the line below to log each element during the generation
        // console.log(triangle[i][j]);
    }

    // Set the last element of the row to 1
    triangle[i][i] = 1;
    // Uncomment the line below to log the current state of the triangle after each row
    // console.log(triangle);
}

// Loop through each row of the triangle to print the final pattern with proper indentation
for (let k = 0; k < triangle.length; k++) {
    let row = '';

    // Add spaces for indentation
    for (let s = 0; s < triangle.length - k - 1; s++) {
        row += ' ';
    }

    // Concatenate the elements of the row and print it
    row += triangle[k].join(' ');
    console.log(row);
}
