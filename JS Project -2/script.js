const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#result');
    const weightguid = document.querySelector('#weightguid')

    if(height === '' || height < 0 || isNaN(height)){
        alert('Please Enter Vaild Height')
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        alert('Please Enter Vaild Weight')
    }else{
        // formula
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${BMI}</span>`

        if(BMI < 18.7){
            weightguid.innerHTML = '<p>Underweight</p>'
        }
        else if(BMI >=18.7 && BMI <=24.5){
            weightguid.innerHTML = '<p>Normal</p>'
        }
        else{
            weightguid.innerHTML = '<p>Overweight</p>'
        }
    }
    

})  