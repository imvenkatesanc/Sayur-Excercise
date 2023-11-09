// problem #4
// write a program to find if two strings are same.
// two string are considered same if both strings have same letters in same order, but from different starting point
// eg abcd is same as bcda (a is moved to the right)
// abcd is same as cdab 
// abcd is  not same as cdba

let str1 = 'dec';
let str2 = 'ecd';

function getEqualString(str1,str2){
    if(str1.length !== str2.length){
        console.log("Not Equal!");
    }

    let combinedStr = str1+str1;
    // console.log(combinedStr);

    for(let i=0; i<combinedStr.length; i++){
        let match = true;

        for(let j=0; j<str2.length; j++){
            if(combinedStr[i+j]!==str2[j]){
                match = false;
                break;
            }
            // console.log(match);
        }
        
        if(match){
            return true;
        }
        // console.log(match);
    }

    return false;
}

if(getEqualString(str1,str2)){
    console.log("Both are equal!");
}else{
    console.log("Not Equal!");
}