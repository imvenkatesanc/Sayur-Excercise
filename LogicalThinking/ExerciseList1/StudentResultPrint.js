// Problem #2
// you have a list of student names and another list with their marks in CS. 
// hard code the values. no need to get it as input
// Pass mark is 50.
// Print a new list with all the students with pass marks along with their mark in the format name:mark.
// Also print the number of students who failed.

const student =["Abi","Bala","Carlia","Dilli","Enika","Ferros","Geetha","Haja","Inba","Jagan"];
const marks = [77,45,67,99,87,36,45,89,49,88];
function getResult(){
    // to calculate the passed students count
    var passedStudent = 0;

    for(let i = 0; i<=student.length; i++){
        if(marks[i]>=50){
            let passed = student[i]+" : "+marks[i];
            console.log(passed);
            passedStudent++;
        }
    }

    console.log("the number of students who failed: "+ (student.length - passedStudent));
}

getResult();