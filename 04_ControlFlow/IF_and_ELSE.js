// if, else if and else

const balance = 1000
if (balance < 1200) {
    console.log(`Balance is less than 1200`);
} else if (balance == 1200) {
    console.log(`Balance is equal to 1200`);
} else {
    console.log(`Else statement is excuted`);
}

const userLoggedIn = true
const debitCard = true

// if both condition is true, code will excute
if (userLoggedIn && debitCard) {
    console.log(`Allow to buy courses`);
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

// if anyone condition is true, code will excute
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`loggedin`);
}

