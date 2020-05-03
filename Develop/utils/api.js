const api = {
  getUser(username) {

  }
};

module.exports = api;

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function writeToFile(fileName, data) {
}

function init() {

}

init();


inquirer
  .prompt({
    message: "Please enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/email`;

    axios.get(queryUrl).then(function(res) {
      console.log(res);
      const gitEmail = res.data.map(function(email) {
        return email.name;
      });
  
      const gitEmailStr = gitEmail.join("\n");

      fs.writeFile("index.html", gitEmailStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Public ${gitEmail.length} email`);
      });
    });
  });
