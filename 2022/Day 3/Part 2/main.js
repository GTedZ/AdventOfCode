var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');
console.time('f')
let alphabet = ('abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()).split('');

let total = 0;

let count = 0;
let first = {}, second = {}, third = {};
for (let line of input) {
    if (count == 3) {
        first = {}, second = {}, third = {};
        count = 0;
    }

    for (let char of line) {
        if (count == 0) first[char] = true;
        else if (count == 1) second[char] = true;
        else if (count == 2) {
            third[char] = true;
            if (!(!first[char] || !second[char] || !third[char])) {
                total += alphabet.indexOf(char) + 1;
                break;
            }
        }

    }

    count++;
}
console.timeEnd('f')
console.log(total);