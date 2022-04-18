


//function that renders both license badge and link into the badge as a clickable object
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      badgeLink = `[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
      badgeLink = `[![license](https://img.shields.io/badge/License-Apache-red.svg)](http://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case 'GNU':
      badgeLink = `[![license](https://img.shields.io/badge/License-GNU-red.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    default:
      badgeLink = '';
      break;
  };
  return badgeLink;
}

// TODO: Create a function that returns the license section of README


// If there is no license, return an empty string
// function renderLicenseSection(license) {}



function techBadge(tech) {
  for (const each of tech) {
    stack += `![](https://img.shields.io/badge/${each}-brightgreen.svg)\n`;
  };
} 

let stack ='';

// TODO: Create a function to generate markdown for README
// const generateMarkdown = ({title, description, installation, usage, contributing, username, email, license, stack, techBadge }) =>

//function that renders each tech as styled badges
function generateMarkdown(data) {
  techBadge(data.tech);
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

 
  
  ## Technologies
  ${stack}

  ## Description 
  ${data.description}
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contributing}


  ## Questions 
  
  Feel free to contact me at ${data.email} 
  you can also visit my [GitHub](https://github.com/${data.username}) profile.
  



`};


module.exports = generateMarkdown;
