var fs = require('fs');

var [startConfigString, rulesString] = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n\n');

const crates = [];

const startConfig = startConfigString.split('\n');

const indent = 1;
const size = 4;

const configs = startConfig.reverse().splice(1);

for (let i = 0; i < 20; i++) {
    crates[i] = [];
}

for (let x = 0; x < configs.length; x++) {
    const line = configs[x];

    for (let i = 0; i < parseInt(line.length / 3) + 1; i++) {
        const char = line.charAt(size * i + indent);
        if (char != '' && char != ' ') crates[i + 1][x] = char;
    }
}

//
const rules = rulesString.split('\n');
for (let rule of rules) {
    let [rest1, destination] = rule.split(' to ');
    let [rest2, origin] = rest1.split(' from ');
    let quantity = rest2.split('move ')[1];

    destination = parseInt(destination);
    origin = parseInt(origin);
    quantity = parseInt(quantity);

    for (let x = 0; x < quantity; x++) {
        const char = findLast_nonEmptyElement(crates[origin])
        if (char) crates[destination].push(char);
    }
}

crates.shift();
console.log(crates);
/**
 * @param {Array} arr
 */
function findLast_nonEmptyElement(arr) {
    if (arr.length != 0) return arr.pop();
    else return false;
}