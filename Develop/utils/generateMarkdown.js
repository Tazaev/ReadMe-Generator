const inquirer = require("inquirer");
const index = require ("../index")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === "GPL v3.0") {
    badge = "![license: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license === "Apache 2.0") {
    badge = "![license](https://img.shields.io/badge/Licesne-Apache%202.0-blue.svg)"
  } else if (license === "MIT") {
    badge = "![GitHub license](https://img.shields.io/github/license/naereen/strapDown.js.svg)"
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if(license === "none") {
    licenseSection = ""
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
