// Problem #1
// Generate the following output using for loop. Go until g.
// a
// aba
// abacaba
// abacabadabacaba
// abacabadabacabaeabacabadabacaba

// look at the output and find the pattern. Hint - add next letter in the alphabet in each row

//First we should find the distance between a and g

let distance = 'g'.charCodeAt(0)-'a'.charCodeAt(0);
console.log(distance);
// we print also g. so
distance = distance+1;
console.log(distance);
function toGeneratePattern(){
    let currentRow = 'a';
    let output = '';
    for(let i=0; i<distance; i++){
        output = output + currentRow +'\n';
        currentRow = currentRow + String.fromCharCode('a'.charCodeAt(0)+i+1)+currentRow;
    }
    return output;
}

console.log(toGeneratePattern());