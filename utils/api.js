// const api = {
//   getUser(username) {
//     inquirer
// .prompt ({
//   message: "Please enter your GitHub username:",
//   name: "username",
//   type: "input",
// })
// .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}`;

//     axios.get(queryUrl).then(function (res) {
//       console.log(res);

//       const username = res.data.user;
//       const email = res.data.email;

//       let document =
//       "Your username is" + username;
//       "Your email is" + email;
  
//       fs.writeFileSync("README.md", document, function (err) {
//         if(err) {
//           throw err;
          
//         }
//       });
//     })
//   })

//   }
// };
   
  

// const avatar = {
//   getUserAvatar(useravatar) {
//     inquirer
//   .prompt({
//     message: "Please enter your GitHub username:",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrlAva = `https://api.github.com/users/${username}.png`;

//     axios.get(queryUrlAva).then(function(res) {
//       console.log(res);
//       const gitAvatar = res.data.map(function(avatar) {
//         return avatar.image;
//       });
  
//       const gitAvatar = gitAvatar.join("\n");

//       fs.appendFile("README.md", gitAvatar, function(err) {
//         if (err) {
//           throw err;
//         }
        

//       });
//     });
//   });



//   }
// };


module.exports = api;
