// Function that returns a license badge depending on which license the user selects
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// Function that returns the link for the license selected
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n [License](#license)\n`;
  }
  return '';
}

// Function that returns the license section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This application is covered by the ${license} license.`;
  }
  return '';
}

// Function to generate the markdown code for the README being created
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Tests](#testingConfirm)
  * [Contribution](#contribution)
  
  ## Description
  ${data.description}

  ### Installation

  ${data.install}

  ### Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ### Contributors
  ${data.contribution}

  ### Questions

  Links to my GitHub page and e-mail will be provided below for any questions you may have:

  GitHub: [${data.profileName}](https://github.com/${data.profileName})

  E-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
