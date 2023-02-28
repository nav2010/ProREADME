// function to generate markdown for README
function generateMarkdown(data) {
  let usedLicense = '';
  if (data.license) {
     usedLicense = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})\n\n`;
  }

// variable that generate the readMe file 
  const readMe = `
  # ${data.title}
  
  ## Description
  ${data.description}
  ## Table Of Content
  -[Title](#title)
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributors](#contributor)
  -[Test](#test)
  -[Repo](#repo)
  -[Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage?
  ${data.usage}
  ## License
  ${usedLicense}
  ## Contributors
  ${data.contributor}
  ## Tests
  ${data.test}
 ## Repos 
 ${data.repo}

 ## Linkedin
 https://www.linkedin.com/in/${data.Linkedin}/
  ## Questions
  Any questions about this project  message on https://github.com/${data.github} or email me at [${data.email}](mailto:${data.email})
  ${data.license ? `
  
  ## License
  This project is licensed under the ${data.license} .` : ''}
`
return readMe;
}

module.exports = generateMarkdown;