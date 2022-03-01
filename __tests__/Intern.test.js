const Intern = require("../lib/Intern");

test("adds a school during intern object creation", () => {
  const intern = new Intern("Sara", "sara@sara.sara", "Sara's School");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets the intern's school", () => {
  const intern = new Intern("Sara", "sara@sara.sara", "Sara's School");

  expect(intern.getSchool()).toEqual(intern.school);
});

test("gets the intern's role", () => {
  const intern = new Intern("Sara", "sara@sara.sara", "Sara's School");

  expect(intern.getRole()).toBe("Intern");
});
