const fs = require("fs");

// writes the newly generated html file that contains the information from the command line, which is sent through the page-template.js file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      // if the file is written successfully, a message will appear to the user: "Team profile created!"
      resolve({
        ok: true,
        message: "Team profile created!",
      });
    });
  });
};

module.exports = writeFile;
