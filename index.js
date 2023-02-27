const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const team = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// function for intern info call
const inti = function() { 

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the intern name?',
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
            name: 'school',
            message: 'What is this employee school?',
        },
        {
           type: 'list',
           message: 'What would you like to do?',
           name: 'menu',
           choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
        },
        
      ])
      .then((data) => {
        
        const inter1 = new Intern(data.name, data.id, data.email, data.school);
        
        team.push(inter1);
        
        if(data.menu==='Add an engineer'){
            engi();
        }
        if(data.menu==='Add an intern'){
            inti();
        }
        if(data.menu==='Finish building team'){
        fs.writeFile(outputPath, render(team), (err) =>
          err ? console.log(err) : console.log('Your team website is ready!')
        );
        }
      });
}
// eninger info call
const engi = function() { 

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the engineer name?',
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
            name: 'github',
            message: 'What is this employee github?',
        },
        {
           type: 'list',
           message: 'What would you like to do?',
           name: 'menu',
           choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
        },
        
      ])
      .then((data) => {
        
        const enginer1 = new Engineer(data.name, data.id, data.email, data.github);
        
        team.push(enginer1);
        
        if(data.menu==='Add an engineer'){
            engi();
        }
        if(data.menu==='Add an intern'){
            inti();
        }
        if(data.menu==='Finish building team'){
        fs.writeFile(outputPath, render(team), (err) =>
          err ? console.log(err) : console.log('Your team website is ready!')
        );
        }
      });
}
// manager info call
const main = async () => { 

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
    
    const manager1 = new Manager(data.name, data.id, data.email, data.officeNumber);
    
    team.push(manager1);
    
    if(data.menu==='Add an engineer'){
        engi();
    }
    if(data.menu==='Add an intern'){
        inti();
    }
    if(data.menu==='Finish building team'){
    fs.writeFile(outputPath, render(team), (err) =>
      err ? console.log(err) : console.log('Your team website is ready!')
    );
    }
  });
}
main();
