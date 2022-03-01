const employeeArray = [];

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = employeeArray.length + 1;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    this.role = "Employee";
    return this.role;
  }
}
module.exports = Employee;
