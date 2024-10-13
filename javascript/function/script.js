// Function in Javascript...

// Function refers to a block of code that executes required number of times...

// Returning is optional...


// 1) Normal Function...

// function myfunc(name){
// console.log(name +" is a talented boy");
// }



// myfunc("Shailesh");
// myfunc("Riyansh");
// myfunc("Arnav");


// 2) Function Expression - Storing the function in a variable is called as function expression 


const talented = function myfunc(name){
    // console.log(name +" is a talented boy");
    return (name) +" is a talented boy";
    }

    // talented("Shailesh");
    
    
    let result = talented("Shailesh");
    console.log(result);
    console.log(typeof(result));
    // talented("Riyansh");
    // talented("Arnav");
    // console.log(talented("Shailesh"));
    // myfunc("Riyansh");
    // myfunc("Arnav");


    // Function with default value... 
    // if you don't provide any value to the function parameter, the one which is assigned to it in the formal parameter will get executed...

    function funWithDefaultVal(nameis = "Shailesh"){
        console.log(nameis+" is talented boy");
    }

    funWithDefaultVal(); //will return Shailesh is talented boy...
    funWithDefaultVal("Riyansh"); //will return Riyansh is talented boy..
    funWithDefaultVal("Arnav"); //will return Arnav is talented boy..


    prompt("Enter your name");



    var userResponse = confirm("Are you sure you want to delete this file?");
if (userResponse) {
    console.log("File deleted.");
} else {
    console.log("File not deleted.");
}
