// const coding = ["java", "python", "javscript", "c++"]

// coding.forEach(element => {
//     console.log(element);
// });

// coding.forEach((element) => {
//     console.log(element);
// });

// // first values then keys then array
// coding.forEach((element, index, arr) => {
//     console.log(element, index, arr);
// });


const myCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },{
        languageName: "javascript",
        languageFileName: "js"
    },
]

myCoding.forEach((element,index) => {
    console.log(element.languageFileName);
});