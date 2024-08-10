function Chai(name, price) {
    this.name = name
    this.price = price
}

Chai.prototype.increment = function(){
    this.price++
}

Chai.prototype.print = function(){
    console.log(`Price of ${this.name} is ${this.price}`);
}

const chai = new Chai("chai", 249)
// console.log(chai);

chai.increment()
chai.print()
