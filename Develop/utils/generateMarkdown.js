const inquirer = require("inquirer");
const index = require("../index");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "GPL v3.0") {
    badge =
      "![license: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache 2.0") {
    badge =
      "![license](https://img.shields.io/badge/Licesne-Apache%202.0-blue.svg)";
  } else if (license === "MIT") {
    badge =
      "![GitHub license](https://img.shields.io/github/license/naereen/strapDown.js.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses";
  } else if ((license = "Apache 2.0")) {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if ((license = "MIT")) {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "none") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
### ${renderLicenseLink(answer.license)}

## Table of Contents:
###  * [License](#license)
###  * [Installation](#installation)
###  * [Usage](#usage)
###  * [Contributors](#contributors)
###  * [Tests](#tests)
###  * [Questions](#questions)

## Installation:
### The following must be installed for this Generator to function:
### ${answer.installation}

## Usage:
### ${answer.usage}

## Contributors:
### ${answer.contributions}

## Tests:
### Run the following commands in the terminal to test this Generator:
### ${answer.tests}

## Questions:
### For any questions about this generator, please contact
### Github: https://github.com/${answer.GitHubEmail}
### or
### Email: ${answer.Email}
`;
}

module.exports = generateMarkdown;
