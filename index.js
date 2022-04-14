
// Requirements
const inquirer = require("inquirer");
const fs = require("fs");


// Library JS
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newStaffInfo = [];


// Questions for prompt
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "list",
                message: "What is your office number?",
                name: "number",
            }
        ]).then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
            teamMembers.push(manager);

            promptMenu()
        })
        
};