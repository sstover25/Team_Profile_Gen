const inquirer = require("inquirer");
const writeFile = require("./src/generate-site");
const generateTeamPage = require("./src/page-template");

// this blank array will be filled with objects created by the responses of the user
const employeeArray = [];

// this is the initial set of questions the user will be prompted to answer. These questions will always be for a Manager object.
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter in the manager's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's employee ID?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter in the employee id!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter in the manager's email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    validate: (officeNumberInput) => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log("Please enter in the manager's office number!");
        return false;
      }
    },
  },
];

// manager questions are prompted and then the answers are made into an object which is then pushed into the employeeArray
const promptManagerQuestions = () => {
  console.log(`
  ---------
  Welcome to the Team Profile Generator!
  ---------
  `);
  return inquirer.prompt(managerQuestions).then((managerData) => {
    employeeArray.push(managerData);
  });
};

// this function pull the user into the Main Menu, where they can select adding a new engineer, adding a new intern, or exiting the application to generate the HTML
const promptMenuQuestion = () => {
  console.log(`
  ---------
  Team Profile Generator
  Main Menu
  ---------
  `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        choices: [
          "Add a new engineer",
          "Add a new intern",
          "Finish building my team",
        ],
        message: "Please select one of the following actions.",
      },
    ])
    .then(function (menuAnswer) {
      let answer = menuAnswer.action;

      // if the user selects an option to add a new employee, they are sent to the function where the employee questions will be prompted
      // if the user chooses to exit the application, the employeeArray is returned out of the function and is used to create the HTML
      if (answer === "Add a new engineer" || answer === "Add a new intern") {
        return promptEmployeeQuestions(answer);
      } else {
        const finalEmployeeArray = employeeArray;
        return finalEmployeeArray;
      }
    });
};

// these are the engineer and intern questions. When the user enters information for an engineer, the function uses the information from the main menu function so that the github question will appear, but the school question will not.
// When the user enters information for an intern, the function uses the information from the main menu function so that the school question will appear, but the github question will not.
const promptEmployeeQuestions = (answer) => {
  console.log(`
  ---------
  ${answer}
  ---------
  `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter in the employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter in the employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter in the employee's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter in the employee's GitHub username!");
            return false;
          }
        },
        when: () => {
          if (answer === "Add a new engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school do they attend?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter in the employee's school!");
            return false;
          }
        },
        when: () => {
          if (answer === "Add a new intern") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((employeeData) => {
      employeeArray.push(employeeData);
    })
    .then(promptMenuQuestion);
};

promptManagerQuestions()
  .then(promptMenuQuestion)
  .then((finalEmployeeArray) => {
    return generateTeamPage(finalEmployeeArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(`
    ${writeFileResponse.message}`);
  })
  .catch((err) => {
    console.log(err);
  });
