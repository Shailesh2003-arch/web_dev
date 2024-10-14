// will be discussing about loops in this lecture...
// loop is a block of code that executes required number of times specified by the user....
// In javascript, there are 6 types of loops...

// 1) for loop (general/regular for loop that runs for a specified number of times...)
//    for loop is preferred when you know exactly how many iterations to be performed beforehand...


    // Syntax of for loop...

    // for(initialization;condition;increment/decrement)
    
/*      {
            // lines of code...
        }

*/

// A simple for loop printing from 1 to 10...

// for(i=1;i<=10;i++){
//     console.log(i);
// }

/*output: 1
          2
          3
          4
          5
          6
          7
          8
          9
          10
*/


// 2) While loop runs a block of code until a certain condition is true...

    // Syntax of while loop

    /* 
    initalization;
    while(condition){
    //block of code...
    updation : (increment/decrement)
    }

    */

// A simple for while printing from 1 to 10...

let i = 1;
while(i<=10){
console.log(i);
i++;
}

/*
    output :1
            2
            3
            4
            5
            6
            7
            8   
            9
            10
*/