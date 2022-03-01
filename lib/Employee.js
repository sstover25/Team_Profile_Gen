const employeeArray = [];

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = employeeArray.length + 1;
  }

  getName() {}

  getId() {}

  getEmail() {}

  getRole() {}
}
module.exports = Employee;
