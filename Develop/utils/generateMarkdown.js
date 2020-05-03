function generateMarkdown(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<div class="container">
<h1> Readme <h1>
<h3> Project Title</h3>
<p>${data.project}</p>
<h3> Description</h3>
<p>${data.description}</p>
<h3> Table of Contents</h3>
<p>${data.table}</p>
<h3> Installation</h3>
<p>${data.installation}</p>
<h3> Usage</h3>
<p>${data.usage}</p>
<h3>License</h3>
<p><span class="w3-badge w3-green">License</span></p>
<p>${data.license}</p>
<h3> Contributing</h3>
<p>${data.contributing}</p>
<h3> Tests</h3>
<p>${data.tests}</p>
<h3>Questions</h3>
<p>${data.questions}</p>
<ul class="list-group">
  <li class="list-group-item">My GitHub email is ${gitEmailStr}</li>
  <li class="list-group-item"> ${gitAvatar}</li>
</ul>
</div>
</div>
</body>
</html>`
  


}

promptUser()
  .then(function(userInput) {
    const markDown = generateMarkdown(data);

    return writeFileAsync("markDown.md", markDown);
  })
  .then(function() {
    console.log("Created in readme");
  })
  .catch(function(err) {
    console.log(err);
  });

  module.exports = generateMarkdown;
