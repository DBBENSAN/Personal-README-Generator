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
        name: "Description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation instructions",
        message: "How do you install your app?"
    },
    {
        type: "input",
        name: "usage information",
        message: "How do you use your app?"
    },
    {
        type: "input",
        name: "contribution guidelines",
        message: "Please provide the names of the other contributors"
    },
    {
        type: "input",
        name: "test instructions",
        message: "Please provide any testing instructions"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of these licenses would you like to use?',
        choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license','BSD 2-Clause "Simplified" or "FreeBSD" license','GNU General Public License (GPL)','GNU Library or "Lesser" General Public License (LGPL)','MIT license','Mozilla Public License 2.0 license','Common Development and Distribution License','Eclipse Public License version 2.0', 'other'],
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
