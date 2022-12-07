var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let line of input) {
    const [first, second] = line.split(',');
    const [firstStart, firstEnd] = first.split('-');
    const [secondStart, secondEnd] = second.split('-');

    let arr = [];

    for (let x = parseInt(firstStart); x <= parseInt(firstEnd); x++) {
        arr[x] = true;
    }
    for (let x = parseInt(secondStart); x <= parseInt(secondEnd); x++) {
        if (arr[x] == true) {
            total++;
            break;
        }
    }
}

console.log(total);