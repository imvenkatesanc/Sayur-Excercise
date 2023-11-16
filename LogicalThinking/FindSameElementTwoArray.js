// 4. THere are two arrays of numbers. the numbers are sorted in ascending order. 
// Find the numbers that are common in both arrays. 
// Eg - array 1 = [1,3,7,9,13,14], array2 [1,2,7,13,15]. answer - [1,7,13]

let arr1 = [1,3,7,9,13,14];
let arr2 = [1,2,7,13,15];
let result = [];
for(let i = 0; i< arr1.length; i++){
    for(let j = 0; j< arr2.length; j++){
        if(arr1[i]==arr2[j]){
            result.push(arr1[i]);
        }else{
            continue;
        }
    }
}
console.log(result);