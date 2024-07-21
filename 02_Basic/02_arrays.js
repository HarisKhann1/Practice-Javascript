const marvelHeros = ["thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// // push() directly manipulate the original array
// marvelHeros.push(dcHeros) // nested array created at index 3 in marvelHeros

// console.log(marvelHeros);
// // access element in nested array
// console.log(marvelHeros[3][1]); // Flash

// concat() merge two arrays and return new array
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// most of the programmer used the below method for merge/concat of arrays, we can merge multiple array.
// const numbers = [1, 2, 3, 4, 5]
// const allHerosAndNumbers = [...marvelHeros, ...dcHeros, ...numbers]
// console.log(allHerosAndNumbers);

// let say we have multiple nested arrays in array and we want to return that array as simple array:
// const newNumberArray = [1, 2, 3, [4, 5, 6], 7, [1, 2, 3, [5,6,7]]]
// const flatArray = newNumberArray.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 5, 6, ]
  
// console.log(flatArray);

// console.log(Array.isArray("Haris")); // false as it is String
// console.log(Array.from("Haris")); // make it array ==> [ 'H', 'a', 'r', 'i', 's' ]
// console.log(Array.from({name: "Haris"})); // interesting


let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));



//===========================================================================



