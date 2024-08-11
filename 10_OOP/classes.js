// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.username}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Haris", "haris@hk.com", "hk123")

console.log(`Username: ${user1.changeUsername()}`);
console.log(`Encypted pass: ${user1.encryptPassword()}`);


// Behind the scence

function Tea(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

Tea.prototype.encryptPassword = function(){
    return `${this.password.toUpperCase()}`
}

const tea = new Tea("tea", "tea@example.com", "123")
console.log(tea.encryptPassword());


