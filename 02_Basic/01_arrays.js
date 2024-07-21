// // const arr = [3,4,5,3,5,3,5,2]
// // console.log(arr[4]);

// // arr.push(33)
// // console.log(arr);
// // arr.pop()
// // console.log(arr);

// const arr1 = new Array(2,1,4,2,4,2)
// console.log(arr1);

// const myarr = arr1.slice(1,4) // it does not change the original array
// console.log(myarr);

// const myarr2 = arr1.splice(1,4) // while it changes the original array
// console.log(myarr2);
// console.log(arr1);

// const myarr4 = arr1.toString() 
// console.log(myarr4, typeof myarr4);

// const myArray = ["apple", "Banana", "Orange"]
// const myobjArray = new Array("Apple", "Banana", "Orange")
// console.log(myArray, typeof myArray);
// console.log(myobjArray, typeof myobjArray);
// console.log(myArray.length);

// sort() method manupulate the original array
const numArr = [4,3,2,5,2,1]
const sortArr = numArr.toSorted()
console.log(numArr);  // [ 1, 2, 2, 3, 4, 5 ]
console.log(sortArr); // [ 1, 2, 2, 3, 4, 5 ]

const valuesOfArray = Object.keys(numArr)
console.log(valuesOfArray);

// toSorted() method manupulate the original array
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']









