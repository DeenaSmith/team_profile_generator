
const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");


test("getRole() returns 'Engineer'", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Ray", 1, "test@test.com", "GitHubUser");

    expect(emp.getRole()).toBe(testValue);
});


test("getGithub() returns GitHub username", () => {
    const testValue = "GithubUser";
    const emp = new Engineer("Ray", 1, "test@test.com", testValue);

    expect(emp.getGithub()).toBe(testValue);
});