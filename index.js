// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of the project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Install the inquirer package using the following command:',
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
            name: 'tests',
            message: 'Is there testing involved with this project?:',
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
};

// Function to write README file with the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Creating README file');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
