const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's employee ID?",
    validate: (idInput) => {
      if (!idInput) {
        console.log("Please enter in the employee id!");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

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

      if (answer === "Add a new engineer" || answer === "Add a new intern") {
        promptEmployeeQuestions(answer);
      } else if (answer === "Finish building my team") {
        //buildTeamPage();
        console.log(employeeArray);
        return;
      }
    });
};

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
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (!idInput) {
            console.log("Please enter in the employee id!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is their github username?",
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
  .catch((err) => {
    console.log(err);
  });
