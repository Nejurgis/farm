// const farm = require('./crops.js')

class Animal {
    constructor(age) {
        this.age = age
    }
    getValueInEuros() {
        // we need the weight and the price
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
        return math.Min(this.maxWeight, this.age * 1.5)
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age)
        this.price = 5.0;
        this.maxWeight = 1200
    }
    getWeightInKg() {
        return math.Min(this.maxWeight, this.age * 1.5)
    }

}

let pig = new Pig(10)

console.log(pig.getValueInEuros())