let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault(); // prevent the default behaviour of submitting the data...

    let name = document.querySelector('#name').value;
    

    let height = parseInt(document.querySelector('#height').value);
    

    let weight = parseInt(document.querySelector('#weight').value);

    let result = document.querySelector('#result');

    let description = document.querySelector('#bmi-descripton');

    if(height<0 || isNaN(height)){
        description.innerHTML = `Please enter a valid Height...`;
        return;
    }
    else if (weight<0 || isNaN(weight)){
        description.innerHTML = `Please enter a valid Weight`;
        return;
    }

    else{
        const bmi_result = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi_result}</span>`;
        if(bmi_result<18.6){
            description.innerHTML = `You are Under Weight`;
        }
        else if(bmi_result>=18.6 && bmi_result<=24.9){
            description.innerHTML = `You are in normal range`;
        }
        else{
            description.innerHTML = `You are Over Weight`;
        }
    }

})

