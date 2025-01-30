var fs=require('fs')

fs.writeFileSync("./hello-world.js","HELLO WORLD")
var content=fs.readFileSync("./hello-world.js","utf-8")
console.log(content)

fs.writeFileSync("./welcome.txt","Hello Node")
var contentWelcome=fs.readFileSync("./welcome.txt","utf-8")
console.log(contentWelcome)

fs.writeFileSync("./password-generator","")
