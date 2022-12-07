const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().replace(/\r/gm, '');

let chars, x;
for (x = 0; x < input.length; x++) {
    chars = [];
    for (let i = 0; i < 4; i++) {
        chars.push(input.charAt(x + i));
    }
    if (Array.from(new Set(chars)).length == 4) break;
}

console.log(x + 4, chars);