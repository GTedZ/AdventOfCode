var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let twos = 0, threes = 0;

for (let x = 0; x < input.length; x++) {
    const element = input[x];
    const current = {};
    let isTwo = false, isThree = false;

    for (let i = 0; i < element.length; i++) {
        const char = element.charAt(i);
        if (!current[char]) current[char] = 0;

        current[char]++;
    }
    for (let key of Object.keys(current)) {
        if (current[key] == 2) isTwo = true;
        else if (current[key] == 3) isThree = true;
    }

    if (isThree) threes++;
    if (isTwo) twos++;
}

console.log(twos, threes, twos * threes);