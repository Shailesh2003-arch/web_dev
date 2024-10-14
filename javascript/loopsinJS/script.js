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

for(i=1;i<=10;i++){
    console.log(i);
}

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

// A simple while loop printing from 1 to 10...

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

/* 3) do-while loop : do-while loop is similar to while loop but the only thing is do-while loop runs at least once even if the condition is false from the beginning...
This happens because the condition is evaluated after the code block runs, unlike other loops that check the condition first 
*/


let j = 11;
do {
console.log(j);
j++;
}
while(j<=10);


// here it will print value of j that is 11 even if the condition is false that is j<=10...


// 4) forEach() loop in JavaScript is a built-in array method that allows you to execute a function on each element of an array. It’s ideal when you want to perform an operation on every item without modifying the array.


Syntax: 
        array.forEach(function(element, index, array) {
            // Code to execute for each element
        });

// Example
            let arr = [10,20,30,40,50];
            arr.forEach(element => {
                console.log(element*2);
            });

console.log(arr);

// output: 20 40 60 80 100


// 5) for...of loop: Iterates over iterable objects (arrays, strings).
  
let myString = "Shailesh";

for (const iterator of myString) {
    console.log(iterator);
}

/* outputs: S
            h
            a
            i
            l
            e
            s
            h
*/


// 5) for in loop iterates over object properties...

let obj = {
name:'shailesh',
age:19
};

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        
    }
}