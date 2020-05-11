const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
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
      type: "input",
      name: "license",
      message: "Please add License for you project."
    },
    {
      type: "input",
      name: "contributing",
      message: "Please outline contributing instructions"
    },
    {
      type: "input",
      name: "tests",
      message: "Please add more data of code and technologies ran."
    },
    {
      type: "input",
      name: "questions",
      message: "Please add/answer some frequently asked questions."
    }
  ];

function init() {
  inquirer.prompt(questions) 
  .then(response => {
    fs.writeFileSync('markDown.md', JSON.stringify(response));
  });
}

init();