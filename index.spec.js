// const {Farm} = require('./index');
const {Wheat, Sugarcane, Crop, Farm} = require('./crops')
const {
    Animal,
    Cow,
    Horse,
    Pig
} = require('./animals')

test('A new Farm can be created', ()=> {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
})

test('Animals can be added to the farm', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
  })
  
  test('Animals will be taken into account for calculateIncome', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
    expect(farm.calculateIncome()).not.toBe(0)
  })