var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let line of input) {
    const [first, second] = line.split(',');
    const [firstStart, firstEnd] = first.split('-');
    const [secondStart, secondEnd] = second.split('-');


    if (parseInt(firstStart) <= parseInt(secondStart) && parseInt(firstEnd) >= parseInt(secondEnd)) total++;
    else if (parseInt(firstStart) >= parseInt(secondStart) && parseInt(firstEnd) <= parseInt(secondEnd)) total++;
}

console.log(total);