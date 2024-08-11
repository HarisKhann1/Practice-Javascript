class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username is: ${this.username}`
    }
}

// Teacher inherited User class
class Teacher extends User {
    constructor(username, email, password) {
        super(username) // used username of User Class
        this.email = email
        this.password = password
    }

    addCourse() {
        return `A new course was added by ${this.username}`
    }
}

// const john = new User("john")
// console.log(john.logMe());

const Smith = new Teacher("Smith", "smith@example.com", "123")
console.log(Smith.logMe()) 
console.log(Smith.addCourse());
console.log(Smith instanceof Teacher); // true
console.log(Smith instanceof User); //true (inheritance)



