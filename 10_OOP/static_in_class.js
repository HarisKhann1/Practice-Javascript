/**
 * In JavaScript, the static keyword is used to define static methods
 * and properties in a class. Static methods and properties belong to
 * the class itself rather than to any instance of the class.
 */


class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

// Using static methods
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(4, 2)); // Output: 8

// another example

class SayHEllo {
    constructor(message) {
        this.message = message
    }

    
    static hello() {
        console.log(this.message);
    }
}

const chai = new SayHEllo("Hi, how are you? ")
// chai.hello() // cant access with instance (error)
