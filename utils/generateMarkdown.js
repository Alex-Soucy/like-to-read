// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readMeTitle}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * 

  ## Description
  ${data.description}

  ### Installation
  ${data.install}

  ### Usage
  ${data.usage}

  ### Contributors
  ${data.contribution}

  ### Questions

  Links to my GitHub page and e-mail will be provided below for any questions you may have:

  GitHub: [${data.profileName}](https://github.com/${data.profileName})

  E-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
