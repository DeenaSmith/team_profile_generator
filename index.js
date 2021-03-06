
// Requirements
const inquirer = require('inquirer');
const fs = require("fs");



// Library JS
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newStaffInfo = [];
const generateSite = require("./src/generate-site");


// Questions for  initial prompt
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        newStaffInfo.push(manager);

        promptMenu()
    })

};


// Options to add employees
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "How would you like to proceed?",
            choices: ["Add engineer", "Add intern", "No further entries"]
        }
    ])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add engineer":
                    engineerQuestions();
                    break;
                case "Add intern":
                    internQuestions();
                    break;
                default:
                    buildTeam();
            }
        })

};



// Add engineer
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github username?"
        }

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

        newStaffInfo.push(engineer)
        promptMenu();
    })
};



// Add intern
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did they attend?"
        }

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

        newStaffInfo.push(intern)
        promptMenu();
    })
};






// Takes user input and builds team to file
function buildTeam () {
    console.log("Your team profile is complete! Check out the newly generated HTML for the results.")

    fs.writeFileSync("./dist/team.html", generateSite(newStaffInfo), "utf-8");
};



managerQuestions();



