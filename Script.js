const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = (document.querySelector('#height').value);
    const weight = (document.querySelector('#weight').value);
    const result = (document.querySelector('#results'));
    console.log(height);
    console.log(weight);
    
    let BMI = (weight / ((height*height)/10000)).toFixed(2);
    console.log(BMI);
    result.innerText=BMI;

})