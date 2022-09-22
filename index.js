// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input your project title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please input a desccription:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please input installation instructions:',
            name: 'instructions'
        },
        {
            type: 'input',
            message: 'Please input any usage information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'List any contributors:',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'Please input any test instructions:',
            name: 'testInstructions'
        },
        {
            type: 'list',
            message: 'Choose a license:',
            name: 'license',
            choices: ['MIT','ISC','zLib']
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'githubName'
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email'
        }
    ])
    .then(({ title, description, instructions, usage, contributors, testInstructions, license, githubName, email}) =>
        fs.writeFile('README.md', createMarkdown(title, description, instructions, usage, contributors, testInstructions, license, githubName, email), (err) =>
            err ? console.error(err) : console.log('Done!'))
    );


