const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is this employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employee email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is this employee office number?',
    },
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'menu',
      choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    },
    
  ])
  .then((data) => {
    const manager1 = new Manager(data.id, data.name, data.email, data.officeNumber);
    render();
  });

//render();