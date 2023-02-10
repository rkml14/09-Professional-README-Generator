// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  return license === "none" ? "" : `![](https://img.shields.io/badge/license-${license.badge}-blue)`
}

// Function that returns the license link  
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  return license === "none" ? "" : "- [License](#license)"
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === "none") return "";
  let licenseHeader = `## License
  Application is covered by the ${license.header} license \n
  More information regarding said license can be found at https://choosealicense.com/licenses/${license.github}`;
  return licenseHeader;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)} 

  ## Description
 
  ${data.description}


  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
   ${renderLicenseLink(data.license)}
   - [Contributing](#contributing)
   - [Test](#test)
   - [Questions](#questions)

  ## Installation
  ${data.install}


  ## Usage
  ${data.usage}


  ${renderLicenseSection(data.license)}
 
  
  ## Contributing 
  ${data.contribution}
  
  ## Test
  ${data.test}
  
  ## Questions
   Please contact me via one of the following methods: 
   
   * https://github.com/${data.github}
   * ${data.email}
`;
}

//Exports the generateMarkdown function to be available for index.js 
module.exports = generateMarkdown;
