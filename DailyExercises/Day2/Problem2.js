// Problem #2
// Write a program that reads a passage or string and counts the occurrences of two consecutive words 
// that are the same without any other specific word in between.
//  For example, count the occurrences of "apple apple" but not "apple orange apple."

function countConsecutive(passage){

    let word = passage.split(/\s+/);
    let count =0;

    for(let i=0; i<word.length; i++){
        if(word[i]==word[i+1]){
            count +=1;
        }
    }

    console.log(`count the occurrences: ${count}`);
}

countConsecutive("Tea Milk Milk Milk Boost Coffee Coffee");