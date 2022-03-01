const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee();

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@"));
});

test("gets the employee's name", () => {
  const employee = new Employee();

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets the employee's id", () => {
  const employee = new Employee();

  expect(employee.getID()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("gets the employee's email", () => {
  const employee = new Employee();

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets the employee's role", () => {
  const employee = new Employee();

  expect(employee.getRole()).toBe("Employee");
});
