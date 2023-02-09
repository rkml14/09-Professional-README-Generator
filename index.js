//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input, using const questions not inquirer.prompt to avoid duplication of question asking
const questions = 
 [
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
    },
    {
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
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions: ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Is there any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Is there any contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Is there any test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose from one of the following license: ',
        name: 'license',
        choices: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
]

//starting with list-choices objects   02-09-23 


// TODO: Create a function to write README file
//Pass parameters of fileName, data into the writeToFile function, and return either an error msg or confirmation messge
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) { 
        if (err)
            console.log(err);
        else
            console.log('Success! README.md has been generated');
    });
}

// Function to initialize app.  Asks the questions for the user
function init() {
inquirer.prompt(questions)
//next lines tells to wait for user answers (saved as an object) before continue 
//answers are then saved as a string in markdown, which is run through the writeToFile function to create a README.md file
.then((answers)=>{
    var markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
})  
}

// Function call to initialize app
init();
