const arr = [55, 43, 2, 4, 1, 43, 5, 7, 6];
console.log('Initial array:', arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            // Swap using destructuring
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}

console.log('Sorted array:', arr);
