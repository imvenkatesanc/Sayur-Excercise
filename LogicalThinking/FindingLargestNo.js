// 3. Sort the numbers in an array (ascending or descending). Write a function that finds the largest number in an array
function getLargestNumberUsingAscending(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped);

    console.log(`Sorted in ascending order: ${arr}`);
    let lastElement = arr.length;
    console.log(`Largest number from given array: ${arr[lastElement-1]}`);
}

let array = [5,4,7,9,77,33,45,12,67,99,76,87,23];
getLargestNumberUsingAscending(array);