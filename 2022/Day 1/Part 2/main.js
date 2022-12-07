var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n\n');

let totals = [];
let count = 0;
input.forEach(elf => {
    elf.split('\n').forEach(i => {
        i = parseFloat(i);
        if (!totals[count]) totals[count] = 0;
        if (i == i) totals[count] += i
    });
    count++;
})

let highests = [];

for (let i = 0; i < 3; i++) {
    let highest = totals[0];
    for (let total of totals) {
        if (total > highest) highest = total;
    }
    let index = totals.indexOf(highest);
    highests.push(highest);
    totals.splice(index, 1);
}

console.log(highests, highests[0] + highests[1] + highests[2]);