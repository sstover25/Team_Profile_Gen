const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const buildTeamCards = (employeeArray) => {
  return `
    put the card formatting here
    `;
};

module.exports = () => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
  
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="text-center"></span>My Team</h1>
      </div>
    </header>
    <main class="col-12 col-lg-9 d-flex flex-column">
          ${buildTeamCards()}
    </main>
    </body>
    </html>
      `;
};
