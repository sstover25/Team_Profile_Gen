const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const buildTeamCards = (employeeArrayData) => {
  const newEmployeeArray = employeeArrayData;
  for (var i = 0; i < newEmployeeArray.length; i++) {
    if (newEmployeeArray[i].officeNumber) {
      const manager = new Manager(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].officeNumber
      );
      return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}<br />${manager.getRole()}</h5>
                <p class="card-text">ID: ${manager.getId()}</p>
                <p class="card-text">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="card-text">Office number: ${manager.officeNumber}</p>
            </div>
        </div>`;
    } else if (newEmployeeArray[i].github) {
      const engineer = new Engineer(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].officeNumber
      );
      return `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}<br />${engineer.getRole()}</h5>
                  <p class="card-text">ID: ${engineer.getId()}</p>
                  <p class="card-text">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                  <p class="card-text">Office number: ${engineer.getGitHub()}</p>
              </div>
          </div>`;
    } else if (newEmployeeArray[i].school) {
      const intern = new Intern(
        newEmployeeArray[i].name,
        newEmployeeArray[i].id,
        newEmployeeArray[i].email,
        newEmployeeArray[i].officeNumber
      );
      return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.getName()}<br />${intern.getRole()}</h5>
                    <p class="card-text">ID: ${intern.getId()}</p>
                    <p class="card-text">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p class="card-text">Office number: ${intern.getSchool()}</p>
                </div>
            </div>`;
    }
  }
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
      <h1 class="text-center"></span>My Team</h1>
      </div>
    </header>
    <main class="col-12 col-lg-9 d-flex flex-column">
          ${buildTeamCards(employeeArrayData)}
    </main>
    </body>
    </html>
      `;
};
