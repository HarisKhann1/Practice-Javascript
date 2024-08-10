const superHeros = ['spiderman', 'hulk']

const superHerosPower = {
    spiderman: "temp",
    hulk: "temp2",

    power: function() {
        console.log(`power of hulk ${this.hulk}`);
    }
}

// adding method at object level

Object.prototype.hello = function() {
    console.log("Hello, access me");
}

// now the hello function will be array and object as well
superHeros.hello()
superHerosPower.hello()

// adding another method to array object only
Array.prototype.print = function(){
    console.log(`This is print function`);
}

superHeros.print()
superHerosPower.print()