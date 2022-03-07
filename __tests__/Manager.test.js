const Manager = require("../lib/Manager");

test("gets the manager's office number", () => {
  const manager = new Manager("Sara", 1, "sara@sara.sara", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets the manager's role", () => {
  const manager = new Manager("Sara", 1, "sara@sara.sara", 1);

  expect(manager.getRole()).toBe("Manager");
});
