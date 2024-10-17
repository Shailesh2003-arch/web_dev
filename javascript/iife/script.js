// Immediately invoked function expression (IIFE)...

// normal function...

// function connectDB(){
//     console.log("DB connected !...");
// }

// connectDB(); function is invoked by us 

dbName = "MongoDB"; // global variable...

(function connectDBTwo(){
    var dbName = "Casandra";//local variable of connectDB()...
    console.log(`Database name is ${dbName}`);
})();

console.log(dbName); // refers to the global variable...


// use case of IIFE....

// 1) when we want to perform a certain work just once, or setting any configuration or setting any value that will happen for just once we use IIFE...
// 2) To declare private variables...








