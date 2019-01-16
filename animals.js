// const farm = require('./crops.js')

class Animal {
    constructor(age) {
        this.age = age
    }
    getValueInEuros() {
        return this.getWeightInKg() / this.price
    }
}

class Pig extends Animal {
    constructor(age) {
        super(age)
        this.price = 4
        this.maxWeight = 700
    }
    getWeightInKg() {
        return Math.min(this.maxWeight, this.age * 2.3)
    }
}

class Horse extends Animal {
    constructor(age) {
        super(age)
        this.price = 10
        this.maxWeight = 1000
    }
    getWeightInKg() {
        return Math.min(this.maxWeight, this.age * 1.7)
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age)
        this.price = 5.0;
        this.maxWeight = 1200
    }
    getWeightInKg() {
        return Math.min(this.maxWeight, this.age * 1.5)
    }

}

module.exports = {
    Animal,
    Cow,
    Horse,
    Pig
}

let pig = new Pig(10)

console.log(pig.getValueInEuros())