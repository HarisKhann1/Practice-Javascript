// forof Loop
/* The for...of loop iterates over the values of iterable objects like arrays, strings, or other objects that implement the iterable protocol.  */

const arr = [1,23,4,5,6]
for (const num of arr) {
    console.log(num);
}

// Maps in js

const map = new Map()
map.set('Pak', 'Pakistan')
map.set('In', 'India')
map.set('Ban', 'Bangladesh')
// map.set('Pak', 'Pakistan')
// console.log(map);
// console.log(map.size);

// returns an array
for (const i of map) {
    console.log(i);
}

for (const [key, value] of map) {
    console.log(key, value);
}