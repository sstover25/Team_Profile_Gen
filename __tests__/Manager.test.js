const Manager = require("../lib/Manager");

test("gets the manager's office number", () => {
  const manager = new Manager();

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets the manager's role", () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe("Manager");
});
