const Engineer = require("../lib/Engineer");

test("adds a github account during engineer object creation", () => {
  const engineer = new Engineer("Sara", "sara@sara.sara", "sara1");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets the engineer's github account", () => {
  const engineer = new Engineer("Sara", "sara@sara.sara", "sara1");

  expect(engineer.getGitHub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});

test("gets the engineer's role", () => {
  const engineer = new Engineer("Sara", "sara@sara.sara", "sara1");

  expect(engineer.getRole()).toBe("Engineer");
});
