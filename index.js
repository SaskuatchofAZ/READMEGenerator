const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
    {
        type: "input",
        message: "Welcome to READMEGenerator! Let's get a project name to start.",
        name: "projectName"
    },
    {
        type: "confirm",
        message: "Would you like a GitHub followers badge in the README?",
        name: "badge" 
    },
    {
        type: "editor",
        message: "Let's add a description of your project.",
        name: "description"
    },
    {
        type: "editor",
        message: "How would you install this project? (Don't forget to include any dependencies!)",
        name: "install"
    },
    {
        type: "editor",
        message: "What is the purpose of your project? (What is used for?)",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of license do you want your project published under?",
        choices: ["Academic Free License", "Apache license 2.0", "Artisitc license 2.0", "Boost Software license 1.0", "BSD 2-clause license", "BSD 3-clause 'New' or 'Revised' license", "BSD 3-clause Clear license", "Creative Commons(CC) license family", "CC Zero v1.0 Universal", "CC Attribution 4.0", "CC Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License Family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "NCSA Open Source License", "The Unlicense", "zLib License"],
        name: "license"
    },
    {
        type: "editor",
        message: "What are some guidelines to contributing?",
        name: "contribution"
    },
    {
       type: "editor",
       message: "How are you testing the project?",
       name: "testing" 
    },
    {
        type: "editor",
        message: "Are there any credits you would like to add to the README? (Contributors, tutorials used, prior dependencies needed to run the program)",
        name: "credits"
    },
    {
       type: "input",
       message: "Please enter your GitHub username so I can add a link and your profile picture to the README",
       name: "username" 
    }
]).then(response => {
    fs.writeFile("./READMEs/README.md", `# ${response.projectName} \n \n`, err => {
        if (err) throw err;
    });

    if (response.badge) {
        fs.appendFile("./READMEs/README.md", `![GitHub followers](https://img.shields.io/github/followers/${response.username}?style=social)\n \n`, err => {
            if (err) throw err;
    })};

    fs.appendFile("./READMEs/README.md", `## Description \n ${response.description} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## Table of Contents \n* [Installation](#installation) \n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Credits](#credits)\n* [License](#license)\n* [Testing](#testing)\n* [GitHub info](#GitHub)\n \n`, err => {
        if (err) throw err;
    });
    
    fs.appendFile("./READMEs/README.md", `## Installation \n ${response.install} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## Usage \n ${response.usage} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## License \n ${response.license} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## Contribution Guidelines \n ${response.contribution} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## Credits \n ${response.credits} \n \n`, err => {
        if (err) throw err;
    });

    fs.appendFile("./READMEs/README.md", `## Testing \n ${response.testing} \n \n`, err => {
        if (err) throw err;
    });
});
    