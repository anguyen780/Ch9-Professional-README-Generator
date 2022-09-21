// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if(license != 'None') {
    badge = `![License Badge](https://shields.io/badge/license-${license}-green)`;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return "https://www.mit.edu/~amini/LICENSE.md"
      break;
    case 'ISC':
      return "https://www.isc.org/licenses/"
      break;
    case 'zLib':
      return "https://www.zlib.net/zlib_license.html"
      default: ''
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none'){
    return `For more information please visit ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, instructions, usage, contributors, testInstructions, license, githubName, email) {
  return `# ${title}
  
## Description

${description}

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[Contributors](#contributors)

-[Testing](#testing)

-[License](#license)

-[Contact Me](#contact-me)

## Installation

${instructions}

## Usage

${usage}

## Contributors

${contributors}

## Testing

${testInstructions}

## License

${renderLicenseBadge(license)}

${renderLicenseSection(license)}

## Contact Me

[Github](https://github.com/${githubName})

Email: ${email}

`;
}

module.exports = generateMarkdown;

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)