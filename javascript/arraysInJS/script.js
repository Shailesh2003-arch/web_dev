//Run the 'array.html' file and see the below output in your developer tools console...
//You can enter your developer tools by using right click and inspect menu... or else you can use the shortcut on the browser ctrl+shift+i  


//Declaring an array
//Ek baat notice karna browser ke console mein, strings hamesha white color mein show hoti hai!...

let array = [1,2,3,4,5,6];
console.log(array);

// Accessing the array elements using index numbers

console.log(array[0]);
console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);


// since array is mutable in nature, changing the array elements is possible... 

array[0] = 786; // changes the first element's value to 786
array[1] = "shailesh"; // changes the second element's value to shailesh

// console.log(array[0]);
// console.log(array[1]);
console.log(array);


console.log(typeof(array)); //As array is treated as an object in javascript therefore it returns type of array as 'Object'...


// Important array methods/functions 

//  1) push() method appends the elements to the end of an array and returns the new length of an array...
//     you can push any number of elements to the end of an array using push() by providing parameters seperated by comma. 


// Example...

array.push(34,23,45,"Riyansh","Nikunj");
console.log(array);
console.log("length of an array is: "+array.length);

// output:  [786, 'shailesh', 3, 4, 5, 6, 34, 23, 45, 'Riyansh', 'Nikunj'] 
// length of an array is: 11

// 2) pop() method removes the last element from an array and returns

//Example...
let last_ele = array.pop();
console.log("last element is: "+last_ele);
// output: last element is: Nikunj

// 3) shift() method removes the first element from an array and returns...

//Example...
let first_ele = array.shift();
console.log(first_ele);
console.log(array);
// output: ['shailesh', 3, 4, 5, 6, 34, 23, 45, 'Riyansh']


// 4) Inserts new elements at the start of an array, and returns the new length of the array.
//    here as well you can add multiple parameters separated by comma which will be inserted at the beginning of the array...

array.unshift("Arnav");
console.log(array);

// output: ['Arnav', 'shailesh', 3, 4, 5, 6, 34, 23, 45, 'Riyansh']


// 5) join() method adds all the elements of an array into a "string", separated by the specified separator string...
//    A string used to separate one element of the array from the next in the resulting string

// console.log(array.join(" and "));
// output: shailesh and 3 and 4 and 5 and 6 and 34 and 23 and 45 and Riyansh


// 6) toString() method returns the string representation of an array

let string = array.toString();
console.log(typeof(string));
console.log(string);

// output:     string 
//             shailesh,3,4,5,6,34,23,45,Riyansh


// 7) indexOf() method returns the index of the first occurrence of a value in an array...


let indexOfRiyansh = array.indexOf("Riyansh");
console.log(indexOfRiyansh);

// output: 9

// 8) at() method in javascript returns the item located at the specified index.

let fourth_ele = array.at(4);
console.log(fourth_ele);

// output: 5 

// 9) 'delete' operator, the delete operator is used to remove properties from objects. It deletes the property and its value but does not affect other parts of the object. It's mainly used for objects, and when used on arrays, it removes the element but leaves an empty spot (i.e., it does not adjust the array's length).

delete array[9];
console.log(array);
console.log(array.length);
// output: ['Arnav', 'shailesh', 3, 4, 5, 6, 34, 23, 45, empty]
//         10


// 10) concat() method combines two or more arrays. This method returns a new array without modifying any existing arrays.

let names = ["Uday","Nahush","Shivam","Aryan"];
extended_array = array.concat(names);
console.log(extended_array);

// outputs: ['Arnav', 'shailesh', 3, 4, 5, 6, 34, 23, 45, empty, 'Uday', 'Nahush', 'Shivam', 'Aryan']