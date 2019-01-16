const {Wheat, Sugarcane, Crop, Farm} = require('./crops')


test('The Wheat class can calculate a yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldinKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldinKg()).toBeCloseTo(674.4, 2)
})

test('The Sugarcane class can calculate a yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldinKg()).toBeDefined()
})

test('The Sugarcane class calculates the proper yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldinKg()).toBeCloseTo(453.39, 2)
})

test('A crop can store its area size', () => {
    const crop = new Crop(12345)
    expect(crop.acres).toBe(12345)
  })

test('Sugarcane class calculates the proper yield value', ()=> {
    const sugarcane = new Sugarcane(0)
    expect(sugarcane.getYieldinEuros()).toBe(0)
})

test('Wheat class calculates the proper yield value', ()=> {
    const wheat = new Wheat(0)
    expect(wheat.getYieldinEuros()).toBe(0)
})

test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new Sugarcane(0)
    expect(sugarcane.getCosts()).toBe(0)
  })
  
  test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new Sugarcane(456)
    expect(sugarcane.getCosts()).toBe(75696)
  })
  
  test('Wheat class calculates the proper costs value', () => {
    const wheat = new Wheat(123)
    expect(wheat.getCosts()).toBe(41820)
  })

  test('We can add a crop to the Farm ', ()=> {
      const farm = new Farm('TEST_NAME')
      farm.addCrop(new Wheat(100))
  })

  test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
  })

  test('The income of a 100 Wheat + 100 Sugarcane farm is X', ()=>{
      const farm = new Farm('TEST_NAME')
      farm.addCrop(new Wheat(100))
      farm.addCrop(new Sugarcane(100))
      expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
  })