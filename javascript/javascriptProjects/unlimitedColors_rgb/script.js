// console.log("script is working");
// we want to generate the color from RGB values now !... 
// we know the RGB value ranges from 0-255 that is 256 values...

const rgbValues = function(){
    let rgba;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

// let getrgbValues = rgbValues();
// console.log(getrgbValues);

let intervalId;
const startChanginColor = function(){
    if(intervalId==null){
        intervalId = setInterval(changebgColor,1000);
        console.log(intervalId);
    }
    
}

const stopChanginColor = function(){
    console.log(intervalId);
    clearInterval(intervalId);
    intervalId = null;
    console.log(intervalId);
  
}

function changebgColor(){
    document.body.style.backgroundColor = rgbValues();
}

document.getElementById('start').addEventListener('click',startChanginColor);
document.getElementById('stop').addEventListener('click',stopChanginColor);

