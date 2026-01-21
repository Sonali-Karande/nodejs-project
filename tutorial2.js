const fs = require('fs');
let text = fs.readFileSync("filee.txt", "utf-8")
console.log(text);
text = text.replace("first", "second")
console.log(text)
fs.writeFileSync("filee2.txt", text)  