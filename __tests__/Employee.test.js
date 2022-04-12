
const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can get name via getName()", () => {
    const testValue = "Ray";
    const emp = new Employee(testValue);

    expect(emp.getName()).toBe(testValue);
});