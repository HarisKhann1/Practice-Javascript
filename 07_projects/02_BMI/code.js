const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid number ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid number ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;

        const p = document.createElement('p')
        if (bmi < 18.6) {
            p.appendChild(document.createTextNode("Your BMI score shows that you are underweight"))
            results.appendChild(p)            
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            p.innerHTML = `<p>Your BMI score shows that your weight is in normal range</p>`;
            // document.querySelector('.result').appendChild(p)
            results.appendChild(p)
        } else if (bmi > 24.9) {
            p.innerHTML = `<p>Your BMI score shows that you are overweight</p>`;
            // document.querySelector('.result').appendChild(p)
            results.appendChild(p)
        }
    }
})

