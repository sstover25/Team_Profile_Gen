const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const buildTeamCards = (employeeArrayData) => {
  const newEmployeeArray = employeeArrayData;
  const cardArray = [];

  for (var i = 0; i < newEmployeeArray.length; i++) {
    if (newEmployeeArray[i].officeNumber) {
      const manager = new Manager(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].officeNumber
      );
      cardArray.push(`
        <div class="card mx-auto" style="min-width: 18rem; margin: 20px;">
            <div class="card-body shadow">
                <h5 class="card-title bg-danger p-2">${manager.getName()}<br />${manager.getRole()}</h5>
                <p class="card-text border border-dark p-2">ID: ${manager.getId()}</p>
                <p class="card-text border border-dark p-2">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="card-text border border-dark p-2">Office number: ${
                  manager.officeNumber
                }</p>
            </div>
        </div>`);
    } else if (newEmployeeArray[i].github) {
      const engineer = new Engineer(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].github
      );
      cardArray.push(`
        <div class="card mx-auto" style="min-width: 18rem; margin: 20px;">
              <div class="card-body shadow">
                  <h5 class="card-title bg-warning p-2">${engineer.getName()}<br />${engineer.getRole()}</h5>
                  <p class="card-text border border-dark p-2">ID: ${engineer.getId()}</p>
                  <p class="card-text border border-dark p-2">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                  <p class="card-text border border-dark p-2"><a href="https://github.com/${engineer.getGitHub()}" target="_blank">GitHub</a></p>
              </div>
          </div>`);
    } else if (newEmployeeArray[i].school) {
      const intern = new Intern(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].school
      );
      cardArray.push(`
        <div class="card mx-auto" style="min-width: 18rem; margin: 20px;">
                <div class="card-body shadow">
                    <h5 class="card-title bg-primary p-2">${intern.getName()}<br />${intern.getRole()}</h5>
                    <p class="card-text border border-dark p-2">ID: ${intern.getId()}</p>
                    <p class="card-text border border-dark p-2">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p class="card-text border border-dark p-2">School: ${intern.getSchool()}</p>
                </div>
            </div>`);
    }
  }
  return cardArray.join("");
};

module.exports = (templateData) => {
  const employeeArrayData = templateData;
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
      <h1 class="text-center bg-info p-2"></span>My Team</h1>
      </div>
    </header>
    <main class="col-12 d-flex flex-row flex-wrap">
          ${buildTeamCards(employeeArrayData)}
    </main>
    </body>
    </html>
      `;
};
