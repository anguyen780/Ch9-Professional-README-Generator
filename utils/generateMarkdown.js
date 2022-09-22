// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if(license != 'None') {
    badge = `![License Badge](https://shields.io/badge/license-${license}-blue)`;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return "[License](https://www.mit.edu/~amini/LICENSE.md)"
      break;
    case 'ISC':
      return "[License](https://www.isc.org/licenses/)"
      break;
    case 'zLib':
      return "[License](https://www.zlib.net/zlib_license.html)"
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

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[Testing](#testing)

[License](#license)

[Questions](#questions)

## Installation

${instructions}

## Usage

${usage}

## Contributors

${contributors}

## Testing

${testInstructions}

## Questions

[Github](https://github.com/${githubName})

Please contact me at at ${email} for additional questions!

---

## License

${renderLicenseBadge(license)}

${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;


