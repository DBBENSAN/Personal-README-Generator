// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'other') {
    return ''
  } else {
    let badge = license.replaceAll(" ", "%20")
    return `![${badge}](https://img.shields.io/badge/license-'+${badge}+'-blue)`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'other') {
    return ''
  } else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD 3-Clause') {
    return `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`

  } else if (license === 'BSD 2-Clause') {
    return `[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'GNU General Public License (GPL)') {
    return `[GPL](https://opensource.org/licenses/gpl-license)`
  }
  else if (license === 'GNU Library or "Lesser" General Public License (LGPL)') {
    return `[LGPL](https://opensource.org/licenses/LGPL-2.0)`
  }
  else if (license === 'MIT license') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Mozilla Public License 2.0 license') {
    return `[Mozilla Public License](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'Common Development and Distribution License') {
    return `[Common Development and Distribution License](https://opensource.org/licenses/CDDL-1.0)`
  }
  else (license === 'Eclipse Public License version 2.0')
  return `[Eclipse Public License](https://opensource.org/licenses/EPL-2.0)`
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Read more about ${license} here:`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}



  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)


  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contribution}
  ## Tests
  ${data.test}

  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}

`;
}

module.exports = generateMarkdown;
