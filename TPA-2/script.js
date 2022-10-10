const btn = document.getElementById('calculate');

btn.addEventListener('click',function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('please fill out your height and weight')
        return;
    }

    height = height / 100

    let BMI = (weight/ (height*height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let category = '';
   

    if(BMI < 18.5){
        category = "underweight";
    }
    if(BMI >= 18.5 && BMI <= 24.9){
        category = "normal";
    }
    if(BMI >= 25 && BMI <= 29.9){
        category = 'overweight';
    }
    if(BMI >= 30){
        category = 'obesity';
    }
    
    console.log(category);
    document.querySelector('.comment').innerHTML = `Comment: you're <span id="comment">${category}</span>`;
     

})