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
            //For choices list: in order for generateMarkdown.js to link to the GitHub page, create the badge and display the full license name, added values to the choices
            type: 'list',
            message: 'Please choose from one of the following license: ',
            name: 'license',
            choices: ['none',
                {
                    name: 'Apache License 2.0',
                    value: {
                        github: 'apache-2.0',
                        badge: 'apache_2.0',
                        header: 'Apache License 2.0',
                    }
                },
                {
                    name: 'GNU General Public License v3.0',
                    value: {
                        github: 'gpl-3.0',
                        badge: 'gpl_3.0',
                        header: 'GNU General Public License v3.0',
                    }
                },
                {
                    name: 'MIT License',
                    value: {
                        github: 'mit',
                        badge: 'mit',
                        header: 'MIT License',
                    }
                },
                {
                    name: 'GNU Affero General Public License v3.0',
                    value: {
                        github: 'agpl-3.0',
                        badge: 'agpl_3.0',
                        header: 'GNU Affero General Public License v3.0',
                    }
                },
                {
                    name: 'GNU Lesser General Public License v3.0',
                    value: {
                        github: 'lgpl-3.0',
                        badge: 'lgpl_3.0',
                        header: 'GNU Lesser General Public License v3.0',
                    }
                },
                {
                    name: 'Mozilla Public License 2.0',
                    value: {
                        github: 'mpl-2.0',
                        badge: 'mpl_2.0',
                        header: 'Mozilla Public License 2.0',
                    }
                },
                {
                    name: 'Boost Software License 1.0',
                    value: {
                        github: 'bsl-1.0',
                        badge: 'bsl_1.0',
                        header: 'Boost Software License 1.0',
                    }
                },
                {
                    name: 'The Unlicense',
                    value: {
                        github: 'unlicense',
                        badge: 'unlicense',
                        header: 'The Unlicense',
                    }
                },
            ]
        },
    ]

//Pass parameters of fileName, data into the writeToFile function, and return either an error msg or confirmation messge
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Success! README.md has been generated');
    });
}

// Function to initialize app.  Asks the questions to the user to complete for their README.md 
function init() {
    inquirer.prompt(questions)
        //next lines tells to wait for user answers (saved as an object) before continuing
        //answers are then saved as a string in markdown, which is run through the writeToFile function to create a README.md file
        .then((answers) => {
            var markdown = generateMarkdown(answers);
            writeToFile('sampleREADME.md', markdown);
        })
}

// Function call to initialize app
init();
