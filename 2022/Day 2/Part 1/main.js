var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;

const items = {};

items.A = 1;    // rock
items.B = 2;    // paper
items.C = 3;    // sci
items.X = 1;    // rock
items.Y = 2;    // paper
items.Z = 3;    // sci

const rules = {};
rules.AX = 3;
rules.BX = 0;
rules.CX = 6;


rules.AY = 6;
rules.BY = 3;
rules.CY = 0;

rules.AZ = 0;
rules.BZ = 6;
rules.CZ = 3;

input.forEach(item => {
    let [his, mine] = item.split(' ');
    total += items[mine];
    total += rules[his + mine];
})

console.log(total);