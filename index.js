//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// An array of questions for user input
inquirer
.prompt ([
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username',
    },
    {
        //type password will not show the entered information on screen
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'projectDescrip',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions: ',
        name: 'projectInstall',
    },
    {
        type: 'input',
        message: 'Is there any usuage information?',
        name: 'projectUsuage',
    },
    {
        type: 'input',
        message: 'Is there any contribution guidelines?',
        name: 'projectGuide',
    },
    {
        type: 'input',
        message: 'Is there any test instructions?',
        name: 'projectTest',
    },
    {
        type: 'list',
        message: 'Please choose from one of the following license: ',
        name: 'projectLicense',
        choice: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
])

//should this be const questions = or inquirer.prompt? 

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
