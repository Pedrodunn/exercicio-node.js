const fs = require('fs');

let nome = process.argv[2];
let sobrenome = process.argv[3];
let email = process.argv[4];

let string = [`${nome},´${sobrenome},${email}`];

fs.writeFile('teste.txt', string, function(){
    console.log(string);
});








