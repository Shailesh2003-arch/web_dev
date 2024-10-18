// map() method  in JavaScript is used to create a new array by calling a provided function on every element in the original array....
// It applies the function to each element and returns the result in a new array without modifying the original array. 


const arr1 = [1,2,3,4,5,6,7,8,9,10];
let reciever = arr1.map((num)=>{
    return num*10;
})

console.log(reciever);



let event_ele = arr1.map((element)=>{
    return element%2==0;
})

console.log(event_ele);