const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 = parseInt(document.querySelector('#num2').value)
    const p = document.createElement('p')
    const resultDiv = document.querySelector('#result')
    
    const result = num1 + num2
    p.appendChild(document.createTextNode(`${num1} +  ${num2} = ${result}`))
    resultDiv.appendChild(p)
})