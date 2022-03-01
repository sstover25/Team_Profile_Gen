const employeeArray = [];

function Employee(name, email) {
  this.name = name;
  this.email = email;
  this.id = employeeArray.length + 1;
}

module.exports = Employee;
