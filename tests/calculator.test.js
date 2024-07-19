const add = require('../src/calculator');
test('for empty string return 0',()=>{
    expect(add("")).toBe(0);
});
