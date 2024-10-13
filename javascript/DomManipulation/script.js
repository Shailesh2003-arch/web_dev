// Returns the content of element having main as it's ID...

let body = document.getElementById('main');
console.log(body);

//Returns the content present inside the specific element...

let navbar = document.getElementById('nav');
console.log(navbar);
console.log(navbar.innerHTML);


//.innerHTML function replaces the content present inside the specific element with the provided content...

// navbar.innerHTML = "<li>Dynamic element is added</li>"

/* 
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Contact</li> 

will be replaced by Dynamic element is added

*/


navbar.textContent = "Riyansh is a talented boy";

navbar.insertAdjacentHTML("beforeend","<li>New content appended</li>");
console.log(navbar);



// class Selector

let container_content = document.getElementsByClassName('containers');
console.log(container_content);



// querselector selects first element and returns the element that matches a specified css selector like div, p, .container, #nav

// Select by a 'tag name'

let ullistitem = document.querySelector('li');
console.log(ullistitem);

// it will return the first matched li from the webpage in this case it is 'home' from 'ul'


let ollistitem = document.querySelector('ol>li');
console.log(ollistitem);

// Returns the first matched li from ol's li...


let itemFromContainerCls = document.querySelector('.containers');
console.log(itemFromContainerCls);

itemFromContainerCls.innerHTML;


// Returns the first matched class selector 



