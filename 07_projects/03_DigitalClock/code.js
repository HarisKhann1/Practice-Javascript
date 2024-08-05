const clock = document.querySelector('#clock')

// method 1
setInterval(function() {
    let date = new Date().toLocaleTimeString()
    clock.innerHTML = date
}, 1000)

// method 2
/* const p = document.createElement('p')
const textNode = document.createTextNode('')

p.appendChild(textNode)
clock.appendChild(textNode)

setInterval(function() {
    let date = new Date()
    textNode.textContent = date.toLocaleTimeString()
}, 1000)
*/
