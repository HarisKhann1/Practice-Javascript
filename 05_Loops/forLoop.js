// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i
//     console.log(element);
// }

// nested loop

// for (let i = 1; i < 2; i++) {
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         // console.log(element);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log();
// }

const arr = [1,2,3,4,5,6]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

for (let index = 0; index < 10; index++) {
    // console.log(index);
    if (index == 5) {
        // break
        continue
    }    
    console.log(index);
}