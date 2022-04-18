// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'what is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'please enter a description or userStory for this project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'please provide user setup instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'please provide user usage example(s)',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors of this project?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'please enter your github username',
      },
      
      {
        type: 'input',
        name: 'email',
        message: 'please enter your email',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the appropriate license for this project',
        choices: ['MIT', 'Apache', 'GNU']
      },


    ]);
  };

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
promptUser()

.then((data) => fs.writeFileSync('readme.md', generateFile(data)))
.then(() => console.log('Successfully wrote to readme.md'))
.catch((err) => console.error(err));


}

// Function call to initialize app
init();
