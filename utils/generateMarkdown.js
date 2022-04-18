

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const techBadge = ({ stack }) => `![license](http://img.shields.io/badge/${stack}-brightgreen.svg) `;
// 

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contributing, username, email, license, stack, techBadge }) =>
  `# ${title}
  
  ![license](http://img.shields.io/badge/license-${license}-blue.svg) 

  ${techBadge}
  
  ## Technologies
  ${stack}

  ## Description 
  ${description}
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${installation}

  ## Usage 
  ${usage}

  ## Contributions
  ${contributing}


  ## Questions 
  
  Feel free to contact me at ${email} 
  you can also visit my [GitHub](https://github.com/${username}) profile.
  



`;


module.exports = generateMarkdown, techBadge;
