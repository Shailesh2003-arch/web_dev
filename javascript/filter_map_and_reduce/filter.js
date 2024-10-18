// The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It filters the elements based on a condition and includes only those that satisfy the condition.



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

// Q4. Filter Items Based on Price
// You are given an array of products where each product is an object with name and price properties. Filter out products that cost more than $50.

// const products = [
//     { name: "Shirt", price: 30 },
//     { name: "Shoes", price: 60 },
//     { name: "Hat", price: 20 },
//     { name: "Jacket", price: 100 }
//   ];

// const product_over_fifty_dollars = products.filter((element)=>{
//     return element.price<50;
// })

// console.log(product_over_fifty_dollars);


// Q5. Filter Out Incomplete Tasks
// You have an array of task objects where each task has a title and a completed status (boolean). Filter out the tasks that are completed.

// const tasks = [
//     { title: "Do laundry", completed: true },
//     { title: "Clean the house", completed: false },
//     { title: "Buy groceries", completed: true },
//     { title: "Pay bills", completed: false }
//   ];

// const incompleteTasks = tasks.filter((element)=>{
//     return element.completed == false;
// });
// console.log(incompleteTasks); 


// Q7. Filter Movies by Rating
// You are given an array of movies, where each movie has a title and a rating. Filter out movies that have a rating less than 8.

// const movies = [
//     { title: "Inception", rating: 8.8 },
//     { title: "The Room", rating: 3.7 },
//     { title: "Interstellar", rating: 8.6 },
//     { title: "Sharknado", rating: 3.3 }
//   ];

//   const topRatedMovies = movies.filter((element)=>{
//     return element.rating>=8;
//   });
// console.log(topRatedMovies);


