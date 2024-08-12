// console.log(Math.PI);
// Math.PI = 5 // internally it set to not rewritable
// console.log(Math.PI);

// why we cannot change PI value ?:
/*
{
  value: 3.141592653589793,
  writable: false, // because of this 
  enumerable: false,
  configurable: false
} 
*/
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);


// lets make our own function, set to not writable: false

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

console.log(chai);

Object.defineProperty(chai, 'name', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

chai.name = 'Chai'

console.log(chai);

// the chai object is not iterable ==> to iterable ==>Object.entries(object)
console.log(`in forof loop`);
for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}



