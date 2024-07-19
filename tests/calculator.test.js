const add = require('../src/calculator');
test('for empty string return 0',()=>{
    expect(add("")).toBe(0);
});
test ('for single number return 1',()=>{
    expect(add("1")).toBe(1);
});
test('for two numbers return sum of them',()=>{
    expect(add("1\n2,3")).toBe(6);
});
test('throws error when they are negative numbers ' ,()=>{
    expect(()=>add("-1,-2,9")).toThrow("negative numbers are not allowed")
});