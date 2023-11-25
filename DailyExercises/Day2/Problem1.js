// Problem #1
// Print the following pattern
// 1
// 212
// 32123
// 4321234
// 543212345
// Get user input for how far to go (up to 0)

function toGetRow(rows){
    for(let i=1;i<=rows; i++){
        let pattern ='';

        //Empty Spaces
        for(let j=rows; i<=j; j--){
            pattern +=' ';
        }

        //Decrement numbers
        for(let k=i; k>=1; k--){
            pattern += k;
        }

        //Except first row
        for(let l=2; l<=i; l++){
            pattern += l;
        }
        
        console.log(pattern);
    }
}

toGetRow(5);