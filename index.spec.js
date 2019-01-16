const {Farm} = require('./index');

test('A new Farm can be created', ()=> {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
})