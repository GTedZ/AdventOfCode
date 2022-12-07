var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let line of input) {

    total += parseInt(line);;
}
console.log(total);