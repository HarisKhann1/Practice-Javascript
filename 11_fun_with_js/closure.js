function counter(){
    let count = 1;
    console.log("hold");
    
    return function(){
        return count++
    }
}

const check = counter()

// Each time you call check(), it runs the inner function,
// which increments and returns the value of count.
console.log(check());
console.log(check());
console.log(check());

// const check2 = counter()
// console.log(check2());
// console.log(check2());
// console.log(check2());
