fs = require("fs");
fs.writeFileSync("notes.txt", "created existing file ");
fs.appendFileSync("notes.txt", "updated existing file ");
