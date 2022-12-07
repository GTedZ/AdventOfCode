var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let alphabet = ('abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()).split('');

let total = 0;

for (let line of input) {
    let first = {}, second = {};
    const length = line.length;
    const half = length / 2;
    for (let x = 0; x < half; x++) {
        let item = line.charAt(x);
        first[item] = true;
    }
    for (let x = half; x < length; x++) {
        let item = line.charAt(x);
        if (first[item]) {
            total += alphabet.indexOf(item) + 1;
            break;
        }

        second[item] = true;
    }
}

console.log(total);