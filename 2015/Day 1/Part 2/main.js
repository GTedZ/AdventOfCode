var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('');

var count = 0; var x;
for (x = 0; x < input.length; x++) {
    let r = input[x];
    if (r == '(') count++; else count--;
    if (count == -1) break;
}
console.log(x + 1);