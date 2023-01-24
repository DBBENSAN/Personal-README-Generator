// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your app?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your app?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide the names of the other contributors:"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide any testing instructions:"
    },
    {
        type: "input",
        name: "email",
        message: "What email can users direct their questions to?"
    },
    {
        type: "input",
        name: "username",
        message: "Please provide a Github Username:"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of these licenses would you like to use?',
        choices: ['Apache License 2.0', 'BSD 3-Clause','BSD 2-Clause','GNU General Public License (GPL)','GNU Library or "Lesser" General Public License (LGPL)','MIT license','Mozilla Public License 2.0 license','Common Development and Distribution License','Eclipse Public License version 2.0', 'other'],
    },
    {
        type: "input",
        name: "fileName",
        message: "Name the project file:"
    },
];


// TODO: Create a function to write README file
function writeToFile(data) {
    const writeName = data.fileName
    fs.appendFile(`${writeName}.md`, data, (err) => (err) ? console.log(err) : console.log("Success"))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile(answers)
    })
}

// Function call to initialize app
init();
