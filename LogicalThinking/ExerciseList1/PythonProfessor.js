// problem #5
// In your college Python is taught in 3 different departments by the same professor. 
// For each dept, get the no of students stutying Python and their marks in the final exam 
// Get the input as comma seperated string

// Find the top 3 marks in each class
// Find the top 3 marks if all classes are combined.
// Find the avg mark of students with passing mark in each class and the classes combined.
// Find which class has the best average mark and least number of failed students.

let IT = [80,65,60,87,90,98,56,74,81,97,99,93,85,62,56,79,63,94,84,72];
let CSE =[93,85,62,56,79,63,94,84,72,46,32,75,47,49,90,60,59,89,67,70];
let AIDS=[80,65,60,87,90,97,56,74,81,96,46,32,75,47,49,90,60,59,80,40];

//Number of students stutying Python and their marks in the final exam

var itStudent = IT.toString();
console.log("-------------------------------------------------------");
console.log("No of IT students: "+IT.length);
console.log("IT students marks: "+itStudent);
console.log();
var cSEStudent = CSE.toString();
console.log("No of CSE students: "+CSE.length);
console.log("CSE students marks: "+cSEStudent);
console.log();
var aIDSStudent = AIDS.toString();
console.log("No of AIDS students: "+AIDS.length);
console.log("AIDS students marks: "+aIDSStudent);
console.log("-------------------------------------------------------");
// Find the top 3 marks in each class

let top3FromIt = IT.sort((a,b) => b-a).slice(0,3);
console.log("Top 3 Marks from IT: "+top3FromIt);
let top3FromCSE = CSE.sort((a,b) => b-a).slice(0,3);
console.log("Top 3 Marks from CSE: "+top3FromCSE);
let top3FromAIDS = AIDS.sort((a,b) => b-a).slice(0,3);
console.log("Top 3 Marks from AIDS: "+top3FromAIDS);
console.log("-------------------------------------------------------");

// Find the top 3 marks if all classes are combined.

let combinedTop3 = IT.concat(CSE,AIDS).sort((a,b) => b-a).slice(0,3);
console.log("3 Classes combined top 3 marks: "+combinedTop3);
console.log("-------------------------------------------------------");
// Find the avg mark of students with passing mark in each class
if(IT.some(val => val>=50) && CSE.some(val => val>=50) && AIDS.some(val => val>=50)){
    // IT average mark
    let itPassed =IT.reduce((a,b) =>{return a+b;},0);
    avgMarkOfIT = (itPassed)*100/(IT.length*100);
    console.log("Average mark of IT: "+avgMarkOfIT+"%");

    // CSE average mark
    let csePassed =CSE.reduce((a,b) =>{return a+b;},0);
    avgMarkOfCSE = (csePassed)*100/(CSE.length*100);
    console.log("Average mark of CSE: "+avgMarkOfCSE+"%");

    //AIDS average mark
    let aidsPassed =AIDS.reduce((a,b) =>{return a+b;},0);
    avgMarkOfAIDS = (aidsPassed)*100/(AIDS.length*100);
    console.log("Average mark of AIDS: "+avgMarkOfAIDS+"%");

    //combined average mark
    let coPassed =IT.concat(CSE,AIDS).reduce((a,b) =>{return a+b;},0);
    avgOfCoPassed = (coPassed)*100/(IT.concat(CSE,AIDS).length*100);
    console.log("Average mark of Combined classes: "+avgOfCoPassed+"%");
}
console.log("-------------------------------------------------------");
// which class has the best average mark and least number of failed students.
if(avgMarkOfIT>avgMarkOfCSE && avgMarkOfIT>avgMarkOfAIDS){
    console.log(`IT class has best average:${avgMarkOfIT}% and less failed:${100-avgMarkOfIT}%`);
} else if(avgMarkOfCSE>avgMarkOfIT && avgMarkOfCSE>avgMarkOfAIDS){
    console.log(`CSE class has best average:${avgMarkOfCSE}% and less failed:${100-avgMarkOfCSE}%`);
}else{
    console.log(`AIDS class has best average:${avgMarkOfAIDS}% and less failed:${100-avgMarkOfAIDS}%`);
}