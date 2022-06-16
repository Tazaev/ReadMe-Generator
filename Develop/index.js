// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What would you like to name this project as?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for this project");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license does this project use?",
    choices: ["Apache 2.0", "GPL v3.0", "MIT", "none"],
    validate: (licenseInput = () => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please choose a license for this project");
        return false;
      }
    }),
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of what this project is about",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a project dscription");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install this project?",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please provide steps for project installation");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use for this project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please specify a use for this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributions",
    message:
      "what guide lines must others follow to contribute to this project?",
    validate: (contributeInput) => {
      if (contributeInput) {
        return true;
      } else {
        console.log("Please specify contribution guidelines");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "How is this project tested?",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please specify how to test this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "GitHubEmail",
    message:
      "What is your GitHub username in case someone needs to contact you for questions about this project?",
    validate: (gitinfoInput) => {
      if (gitinfoInput) {
        return true;
      } else {
        console.log("Please provide your GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Email",
    message:
      "What is your email in case someone needs to contact you for questions about this project?",
    validate: (emailinput) => {
      if (emailinput) {
        return true;
      } else {
        console.log(
          "Please provide your email in case someone needs to contact you about this project"
        );
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}
// Function call to initialize app
init();

module.exports = questions;
