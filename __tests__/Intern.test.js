
const Intern = require("../lib/Intern");


test("Gets school via constructor", () => {
    const testValue = "UTSA";
    const emp = new Intern("Ray", 1, "test@test.com", testValue);

    expect(emp.school).toBe(testValue);
});


test("getRole() returns 'Intern'", () => {
    const testValue = "Intern";
    const emp = new Intern("Ray", 1, "test@test.com", "UTSA");

    expect(emp.getRole()).toBe(testValue);
});


test("getSchool() returns school", () => {
    const testValue = "UTSA";
    const emp = new Intern("Ray", 1, "test@test.com", testValue);

    expect(emp.getSchool()).toBe(testValue);
});