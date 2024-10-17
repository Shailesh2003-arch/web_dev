// console.log(this);// as of now our javasacript is runnig by the browser that is, the browser is having the engine that runs the js, it results into a window object which is the global object for js engine...




// const obj = {
//     username:"Shailesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`Welcome, ${this.username}`)
//         // console.log(this);
//     }
// };

// obj.welcomeMessage();
// obj.username = "Riyansh"; // Welcome, Shailesh
// obj.welcomeMessage();// will output : Welcome, Riyansh

// console.log(this); // will result into a window object...


// function myfunc(){
//     let username = "shailesh";
//     console.log(this.username);
// }

// myfunc();


//arrow function...


// let arrowFun = ()=>{
//     let username = "Shailesh";
//     console.log(this.username); // will say undefined...
// }
 
// arrowFun();

// As a result we can say that the arrow function doesnt have its binding with the current execution context..
// whereas, the normal function has its binding to the current execution context... that's why it refers to the current object...