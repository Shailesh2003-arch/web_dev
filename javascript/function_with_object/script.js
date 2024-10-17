function calculateCartPrice(item1_price, item2_price, ...itemn_price){
 return itemn_price;
}

console.log(calculateCartPrice(100,200,300,400,500));


//passing an object to a function...

let myObject = {
    name:"Shailesh",
    age:19
};

function anyObject(anyObject){
    console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
}

//  anyObject(myObject); 


// directly passing object...
anyObject({
name:"Sam",
age:20,
});


//passing array to function...


let arr = [200,300,400,500,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(arr));