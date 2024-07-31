// reduce in js

const numbers = [1, 2, 3]

const total = numbers.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and current value: ${currVal}`);
    return acc + currVal
}, 0)

console.log(total);

const courses = [
    {
        name: "Python",
        price: 999
    },
    {
        name: "Java",
        price: 999
    },
    {
        name: "opencv",
        price: 999
    },
]

const totalBill = courses.reduce( (acc, item) => acc+item.price, 0)
console.log(totalBill);