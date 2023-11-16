// Write a program to calculate your avg marks in CS subject in the last 3 exams.

function toGetAvgMarks(csm1,csm2,csm3){
    let avgMark = (csm1+csm2+csm3)/3;
    return avgMark;
}

console.log(`This is your average of last 3 CS exams: ${toGetAvgMarks(75,85,95)}`);