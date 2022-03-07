const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const buildTeamCards = (employeeArrayData) => {
  const newEmployeeArray = employeeArrayData;
  console.log(newEmployeeArray);
  for (var i = 0; i < newEmployeeArray.length; i++) {
    if (newEmployeeArray[i].officeNumber) {
      return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${Manager.getName()}<br />${Manager.getRole()}</h5>
                <p class="card-text">ID: ${Manager.getId()}</p>
                <p class="card-text">Email: <a href="${Manager.getEmail()}">${Manager.getEmail()}</a></p>
                <p class="card-text">Office number: ${Manager.getOfficeNumber()}</p>
            </div>
        </div>`;
    } else if (newEmployeeArray[i].github) {
      return `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${Engineer.getName()}<br />${Engineer.getRole()}</h5>
                  <p class="card-text">ID: ${Engineer.getId()}</p>
                  <p class="card-text">Email: <a href="${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
                  <p class="card-text">Office number: ${Engineer.getGitHub()}</p>
              </div>
          </div>`;
    } else if (newEmployeeArray[i].school) {
      return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Intern.getName()}<br />${Intern.getRole()}</h5>
                    <p class="card-text">ID: ${Intern.getId()}</p>
                    <p class="card-text">Email: <a href="${Intern.getEmail()}">${Intern.getEmail()}</a></p>
                    <p class="card-text">Office number: ${Intern.getSchool()}</p>
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
