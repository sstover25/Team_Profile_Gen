const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "number",
    name: "employeeId",
    message: "What is the manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "office",
    message: "What is the managers office number?",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your employee's name?",
  },
  {
    type: "number",
    name: "employeeId",
    message: "What is their employee ID?",
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
    when: ({ action }) => {
      if (action === "Add a new engineer") {
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
    when: ({ action }) => {
      if (action === "Add a new intern") {
        return true;
      } else {
        return false;
      }
    },
  },
];

const promptManagerQuestion = () => {
  return inquirer.prompt(managerQuestions);
};

const promptMenuQuestion = () => {
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
        promptEmployeeQuestion(answer);
      } else if (answer === "Finish building my team") {
        buildTeamPage();
      }
    });
};
