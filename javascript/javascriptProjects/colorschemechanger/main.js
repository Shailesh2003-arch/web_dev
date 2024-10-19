const button = document.querySelectorAll('.box');
const body = document.querySelector("body");

button.forEach((button)=>{
  button.addEventListener('click',function(event){
    console.log(event);
    console.log(event.target.id);
    if (event.target.id=='grey') {
        body.style.backgroundColor = "grey";
    }
    else if(event.target.id=='green'){
        body.style.backgroundColor = "green";
    }
    else if(event.target.id=='yellow'){
        body.style.backgroundColor = "yellow";
    }
    else if(event.target.id=='aqua'){
        body.style.backgroundColor = "aqua";
    }
  })
})