const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email);
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    this.role = "Engineer";
    return this.role;
  }
}

module.exports = Engineer;
