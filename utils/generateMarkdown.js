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
${data.questions}
## User Email
${data.useremail}
## GitHub Username
`

  


}



module.exports = generateMarkdown;
