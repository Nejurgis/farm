const {Animal, Pig, Horse, Cow } = require('./animals')

let animal = new Pig(100);
console.log(animal.getValueInEuros());


class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }
    addCrop(crop) {
        this.crops.push(crop)
    }

    addAnimal(animal) {
        
        this.animals.push(animal)
    }
    calculateIncome() {

        // using the getYieldEuros on all the crop instances
        // that are in this.crops
        return this.crops
            .map(crop => crop.getYieldinEuros())
            // so in this case the 'sum' variable will be
            // sugarcane, wheat etc
            .reduce((sum, item) => sum + item, 0) 
            +
            this.animals
            .map(animal => animal.getValueInEuros())
            // so in this case the 'sum' variable will be
            // sugarcane, wheat etc
            .reduce((sum, item) => sum + item, 0) 

    }

    
}

class Crop {
    constructor(acres) {
        this.acres = acres
    }
    getYieldinEuros() {
        return this.price * this.getYieldinKg()
    }

    getCosts() {
        // per each acre it costs to maintain the crops
        // gather this.costs from each class
        // need to return a number
        return this.costs * this.acres
    }
}

class Wheat extends Crop {
    constructor(acres) {
        super(acres)
        this.price = 1.5
        this.costs = 340
    }
    getYieldinKg() {
        return Math.pow(this.acres * 1.5, 1.3)
    }
}

class Sugarcane extends Crop {
    constructor(acres) {
        super(acres)
        this.price = 2
        this.costs = 166
    }
    getYieldinKg() {
        return (this.acres * 2.6) ** 1.1
    }
}
module.exports = {
    Wheat,
    Sugarcane,
    Crop,
    Farm
}