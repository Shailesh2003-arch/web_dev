let para = document.getElementById('para');
para.addEventListener('mouseover',function run(){
    alert('Mouse inside the para');
    console.log('Mouse inside the para');
});

para.addEventListener('mouseout',function run(){
    alert('Mouse outside the para');
    console.log("Mouse outside the para");
});




function hidePara(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display !='none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}