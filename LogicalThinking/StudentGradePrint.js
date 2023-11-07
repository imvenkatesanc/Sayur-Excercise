// Problem #3
// you have a list of student names. you have one list each for their marks in CS, Math and English. 
// hard code the values. no need to get it as input
// Pass mark is 50.
// Grade A is, mark 90 or above
// Grade B , 80 or above
// Fail is < 50
// Print the name of the students who got A in all subjects or atleast one A and the rest B.
// Try to use only one if statement.

let studentName = ["Anbu","Basith","Christy","Dia","Eisha","Fazil","Govind","Jeejo"];
let marks = {
    "Anbu":[97,78,80],
    "Basith":[60,35,70],
    "Christy":[99,100,98],
    "Dia":[87,89,90],
    "Eisha":[56,92,40],
    "Fazil":[25,46,80],
    "Govind":[10,32,8],
    "Jeejo":[60,80,50]
};

function getGrade(){

    for(let i=0; i<=studentName.length; i++){

        let student = studentName[i];
        let mark = marks[student];

        if(mark){
            //the name of the students who got A in all subjects
            if(mark.every(track => track>=90)){
                let GradeA = student +":"+mark;
                console.log(`Got A in all subjects: ${GradeA} \n`);
            }
            //atleast one A and the rest B
            else if(mark.some(value => value>=80 && value<90)){
                let GradeB = student +":"+mark;
                console.log(`Atleast one A and the rest B: ${GradeB} \n`);
            }
        }
    }
}

getGrade();