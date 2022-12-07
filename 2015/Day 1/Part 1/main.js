var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('');

var count = 0;
input.forEach(r => {
    if (r == '(') count++; else count--;
})
console.log(count);