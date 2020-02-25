const fs = require("fs");
const path = require("path")

if (process.argv.length < 3) {
  console.error("ERROR: No file parameter passed");
  return -1;
}

const file = process.argv[2];

const bytes = fs.readFileSync(file);
const base64string = Buffer.from(bytes).toString("base64");

fs.writeFileSync(file + ".b64", base64string);
