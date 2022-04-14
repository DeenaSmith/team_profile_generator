
const Engineer = require("../lib/Engineer");



test("Gets GitHub account via constructor function", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Ray", 1, "test@test.com", testValue);

    expect(emp.github).toBe(testValue);
});



test("getRole() returns 'Engineer'", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Ray", 1, "test@test.com", "GitHubUser");

    expect(emp.getRole()).toBe(testValue);
});



test("getGithub() returns GitHub username", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Ray", 1, "test@test.com", testValue);

    expect(emp.getGithub()).toBe(testValue);
});


