const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
     let message = "";
    if (bmi < 18.6) {
        message = "You are underweight.";
       
    } else if (bmi>= 18.6 && bmi<= 24.9)
        {
       message =" You have a normal weight." ;
    } else{
        message = "you are overweight.";
    }
    //show the result
    results.innerHTML = `<span>${bmi} - ${message}</span>`;
  }
});