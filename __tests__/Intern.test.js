const Intern = require("../lib/Intern");

test("adds a school during intern object creation", () => {
  const intern = new Intern();

  expect(intern.school).toEqual(expect.any(String));
});

test("gets the intern's school", () => {
  const intern = new Intern();

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets the intern's role", () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe("Intern");
});
