const add = require('../src/calculator');
test('for empty string return 0',()=>{
    expect(add("")).toBe(0);
});
test ('for single number return 1',()=>{
    expect(add("1")).toBe(1);
});
test('for two numbers retur sum of them',()=>{
    expect(add("1,2")).toBe(3);
});