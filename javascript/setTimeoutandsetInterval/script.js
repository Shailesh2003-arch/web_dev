// setTimeout(function greet(){
// console.log("I wil execute after 3 seconds");
// },3000);


// function greet(name,age,clg){
//     console.log(`Myself ${name},Age is ${age} from ${clg} college`);
// }

// let timeOut = setTimeout(greet,3000,"Shailesh",19,"DIEMS");
// let timeOut1 = setTimeout(greet,3000,"Riyansh",20,"DIEMS");

// console.log(timeOut);
// console.log(timeOut1);

// clearTimeout(timeOut);



let timeoutId = setTimeout(function() {
    document.getElementById("popup").style.display = "block";
}, 5000);

// Step 2: Add event listener to cancel button
document.getElementById("cancelBtn").addEventListener("click", function() {
    // Clear the timeout before it shows the popup
    clearTimeout(timeoutId);
    alert("Notification canceled!");
});


let intervalId = setInterval(function(){
    console.log("Hello shailesh");
},1000);

console.log(intervalId);

setTimeout(function(){
    clearInterval(intervalId);
},10000);



// function displaytime(){
//     time = new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML=time;
// }


// let id = setInterval(displaytime,1000);
