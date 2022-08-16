// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'desciption',
    message: 'Write a description of your project:'
    },
    {
    type: 'input',
    name: 'instructions',
    message: 'Write the installation instructions:'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Write your usage directions:'
    },
    {
    type: 'checkbox',
    message: 'Select your licensing:',
    name: 'license',
    choices: ['MIT'],
    },
    {
    type: 'input',
    name: 'contributers',
    message: 'List any contributors to this project:'
    },
    {
    type: 'input',
    name: 'testinstructions',
    message: 'Write test instructions:',
    },
])
}
function generateMarkdown({title, desciption, usage, contributers, testinstructions, license}){
    return `
   # ${title}

   ## Table of Contents
    - [Description](#description)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [Test Instructions](#testinstructions)
    - [License](#license)
   
   ## Description
   ${desciption}
   
   ## Usage
   ${usage}
   
   ## Contributors
   ${contributers}
   
   ## Test Instructions
   ${testinstructions}
   
   ---
   
   © 2022 ${license} license. Confidential and Proprietary. All Rights Reserved.
   
`}

const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('READEME.MD', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.MD'))
      .catch((err) => console.error(err));
  };
  
  init();