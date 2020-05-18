function generateMarkdown(data) {

  return `
## Project Title
${data.project}
## Description
${data.description}
## Table of Contents
${data.table}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}`
  


}

// promptUser()
//   .then(function(userInput) {
//     const markDown = generateMarkdown(data);

//     return writeFileAsync("markDown.md", markDown);
//   })
//   .then(function() {
//     console.log("Created in readme");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

  module.exports = generateMarkdown;
