const inquirer = require("inquirer");
const axios = require("axios");

const api = {
  getUser(username) {
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

      fs.appendFile("markDown.md", gitEmailStr, function(err) {
        if (err) {
          throw err;
        }
        

      });
    });
  });



  }
};

const avatar = {
  getUserAvatar(useravatar) {
    inquirer
  .prompt({
    message: "Please enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrlAva = `https://api.github.com/users/${username}.png`;

    axios.get(queryUrlAva).then(function(res) {
      console.log(res);
      const gitAvatar = res.data.map(function(avatar) {
        return avatar.image;
      });
  
      const gitAvatar = gitAvatar.join("\n");

      fs.appendFile("markDown.md", gitAvatar, function(err) {
        if (err) {
          throw err;
        }
        

      });
    });
  });



  }
};


module.exports = api;

