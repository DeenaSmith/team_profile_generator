
const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');


test("Gets name via getName()", () => {
    const testValue = "Ray";
    const emp = new Employee(testValue);

    expect(emp.getName()).toBe(testValue);
});


test("Gets ID via getId()", () => {
    const testValue = 50;
    const emp = new Employee("Ray", testValue);

    expect(emp.getId()).toBe(testValue);
});


test("Gets email via getEmail()", () => {
    const testValue = "test@test.com";
    const emp = new Employee("Ray", 1, testValue);

    expect(emp.getEmail()).toBe(testValue);
});


test("getRole() returns 'Employee'", () => {
    const testValue = "Employee";
    const emp = new Employee("Ray", 1, "test@test.com");

    expect(emp.getRole()).toBe(testValue);
});