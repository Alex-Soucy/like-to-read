// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'readMeTitle',
            message: 'What is the title of the project?:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of the project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Describe the process for installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for?:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?:'
        },
        {
            type: 'confirm',
            name: 'testingConfirm',
            message: 'Is there testing involved with this project?:',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the correct license for your project (if applicable):',
            choices: ['Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
        },
        {
            type: 'input',
            name: 'profileName',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address for people to contact you with questions:'
        }
    ]);
}

promptUser();
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
