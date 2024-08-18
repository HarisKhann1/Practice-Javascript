function insertionSort(arr) {
    for (let i = 0; i < array.length; i++) {
    let key = arr[i] //11
    let j = i - 1 // 0
    // 12 > 11
    while (j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j] // 1 = 12
        j = j - 1 //0
        console.log(j);
        
    }
    arr[j+1] = key  // 0 = 12
    }
    return arr
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(array));