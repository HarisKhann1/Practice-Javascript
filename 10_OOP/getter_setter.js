class Person {
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;   // we can use "_" with variable but then the properites will be accessable outside the class as it for indication that the properties should be use accessable within the class
      this.#age = age;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(value) {
      this.#name = value;
    }
  
    get age() {
      return this.#age;
    }
  
    set age(value) {
      if (value > 0) {
        this.#age = value;
      } else {
        console.log('Age must be positive.');
      }
    }
  }
  
  const person = new Person('Alice', 30);
  console.log(person.name); // 'Alice'
//   console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
  

// old syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);