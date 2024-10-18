// array function cannot return so it becomes impossible to perform certain operation on an element if it's required for further process 
// so to overcome this problem 
// filter() was introduced...



let arr = [10,20,30,40,50];

// let reciever = arr.forEach((element)=>{
// // console.log(element); will log each element in the console...
// return (element*2);
// })

// console.log(reciever);
// console.log("array is: "+arr);


// let reciever = arr.filter((element)=>element>20)
// console.log(reciever);


// let newarr = [];

// arr.forEach((num)=>{
//     if(num>20){
//         newarr.push(num);
//     }
// })

// console.log(newarr);



// Exercises to use filter() method...

// Q1. Filter Odd Numbers
// Create a function that takes an array of numbers and returns a new array containing only the odd numbers.

// numbers = [1,2,3,4,5,6,7];

// let odd_nums = numbers.filter((element)=>{
//     return (element%2!=0);
// })

// console.log(odd_nums);

// Q2 Filter Words Longer than 5 Characters
// Given an array of strings, filter out words that are longer than 5 characters


// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

// let strings_having_more_than_five_words = words.filter((element)=>{
//     return element.length>5;
// })

// console.log(strings_having_more_than_five_words);


// Q3. Filter People by Age
// You have an array of objects where each object represents a person with a name and an age property. Filter out people who are younger than 18 years old.

// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Sam", age: 22 },
//     { name: "Tom", age: 15 }
//   ];

// const adults = people.filter((element)=>{
//     return element.age>18;
// })

// console.log(adults);