class Farm {
    constructor (name) {
        this.name = name
        this.crops = []
    }
    addCrop(crop) {
        this.crops.push(crop)
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

const sugarCane = new Sugarcane(456);
console.log(sugarCane.getCosts());


module.exports = { Wheat, Sugarcane, Crop, Farm }

