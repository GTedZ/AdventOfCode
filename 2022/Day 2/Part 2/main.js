var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;

const items = {};

items.A = 1;    // rock
items.B = 2;    // paper
items.C = 3;    // sci

const rules = {};
rules.X = 0;
rules.Y = 3;
rules.Z = 6;


const losses = {};
losses.A = 3;
losses.B = 1;
losses.C = 2;

const draws = {};
draws.A = 1;
draws.B = 2;
draws.C = 3;

const wins = {};
wins.A = 2;
wins.B = 3;
wins.C = 1;

input.forEach(item => {
    let [his, mine] = item.split(' ');
    total += rules[mine]
    if (rules[mine] == 0) total += losses[his];
    else if (rules[mine] == 3) total += draws[his];
    else if (rules[mine] == 6) total += wins[his];
})

console.log(total);