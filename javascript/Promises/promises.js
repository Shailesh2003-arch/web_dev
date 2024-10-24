// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous tasks in a cleaner way by providing methods like .then(), .catch(), and .finally() to manage the outcome once the operation is completed.

// Pending: Initial state, the operation hasn't completed yet.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

let data; // used for storing the data that will be fetched from the api...


//creating a promise.... (Most of the time we consume promise, that is we execute a promise that has been already created by someone !...)
// but here we are creating our own promise...

// const myPromise = new Promise(function(resolve,reject){ //promise takes a callback function which has 2 parameters (resolve,reject)...
// const requestUrl = 'https://api.github.com/users/Shailesh2003-arch' // using my own github info provided by github api 

// const xhr = new XMLHttpRequest(); // creating instance of XMLHttpRequest...
// xhr.open('GET',requestUrl); // open() is one of the  configuring method, which specifies the Http method ('GET','POST',payloads,etc)  with the url...

// xhr.send(); //send method dispatches the request to the server...


// xhr.onreadystatechange = function(){  // continuosly tracks the http request...
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         data = JSON.parse(this.responseText);
//         resolve(data); // resolve method resolves the promise and states that the promise is fullfilled...
        
// }
// }
// });

// myPromise.then(function(data){ // .then() takes a callback function which is directly related to the resolve()...
//     // console.log(data); // will be getting the fetched data...(commenting the fetched data as of now...)
//     // now here we can access the data fetched from the api which is stored in our 'data'...
//     console.log(`Your current followers are : ${data.followers}`);
//     console.log(`Your github username is : ${data.login}`);
//     console.log(`Your github profile pic's link (url) is : ${data.avatar_url}`);
//     console.log(`Your github bio is : ${data.bio}`);
//     // this is how promises resolve and rejects...

// })


const promiseFour = new Promise(function(resolve,reject){
       
       setTimeout(function(){
        let error = true; // delibraterly making an error to understand how to handle the case when we get a rejection for a promise...
        if(!error){
            resolve({username:"shailesh",password:"123456"})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
       },1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})