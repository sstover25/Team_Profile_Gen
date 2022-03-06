const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee("Sara", 1, "sara@sara.sara");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@"));
});

test("gets the employee's name", () => {
  const employee = new Employee("Sara", 1, "sara@sara.sara");

  expect(employee.getName()).toEqual(employee.name);
});

test("gets the employee's id", () => {
  const employee = new Employee("Sara", 1, "sara@sara.sara");

  expect(employee.getId()).toEqual(employee.id);
});

test("gets the employee's email", () => {
  const employee = new Employee("Sara", 1, "sara@sara.sara");

  expect(employee.getEmail()).toEqual(employee.email);
});

test("gets the employee's role", () => {
  const employee = new Employee("Sara", 1, "sara@sara.sara");

  expect(employee.getRole()).toBe("Employee");
});
