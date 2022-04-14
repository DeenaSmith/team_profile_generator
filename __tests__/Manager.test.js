
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test("Gets office number via constructor", () => {
    const testValue = 100;
    const emp = new Manager("Ray", 1, "test@test.com", testValue);

    expect(emp.getOfficeNumber()).toBe(testValue);
});



test("getRole() returns 'Manager'", () => {
    const testValue = "Manager";
    const emp = new Manager("Ray", 1, "test@test.com", 100);

    expect(emp.getRole()).toBe(testValue);
});



test("Gets office number via getOfficeNumber()", () => {
    const testValue = 100;
    const emp = new Manager("Ray", 1, "test@test.com", testValue);

    expect(emp.getOfficeNumber()).toBe(testValue);
});