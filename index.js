const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [{
      type: "input",
      name: "project",
      message: "Please add your Project Title."
    },
    {
      type: "input",
      name: "description",
      message: "Please add a description of your project."
    },
    {
      type: "input",
      name: "table",
      message: "Please add a table of contents for your project."
    },
    {
      type: "input",
      name: "installation",
      message: "Please add instructions to make environment ready for program execution."
    },
    {
      type: "input",
      name: "usage",
      message: "Please add instructions for use of project once installed"
    },
    {
      type: "list",
      name: "license",
      message: "Please add License for you project.",
      choices: ["Apache", "MIT", "GPL", "LGPL"]
    },
    {
      type: "input",
      name: "contributing",
      message: "List contributers that helped with this project"
    },
    {
      type: "list",
      name: "tests",
      message: "Does this app use tests?",
      choices: ["yes", "no"]
    },
    {
      type: "input",
      name: "questions",
      message: "Please add/answer some frequently asked questions."
    },

    {
      message: "Please enter your email:",
      name: "useremail",
      type: "input"
    }
];

      function init() {
  inquirer.prompt(questions,).then(response => {
    fs.writeFileSync('README.md', generateMarkdown(response));
    promptUser()
  })
      }
    

init();
//  with this uncommented it runs through second prompt

const questionTwo = [
  {
  message: "Please enter your GitHub username:",
  name: "username",
  type: "input"
}
];

  
function promptUser() {
  inquirer.prompt(questionTwo)
  .then(function( {username}) {
        const queryUrl = `https://api.github.com/users/${username}`;
    
        axios.get(queryUrl).then(function (res) {
            
          const username = res.data.login;
          
          let document =
          "Your username is:" + " " + username;
      
          fs.appendFileSync("README.md", document, function (err) {
            if(err) {
              throw err;
              
            }
          });
        })
      })
    
      };
       