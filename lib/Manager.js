const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, officeNumber) {
    super(name, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    this.role = "Manager";
    return this.role;
  }
}

module.exports = Manager;
