var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let fuel of input) {
    let totalFuel = parseInt(fuel);
    let divByThree = Math.floor(totalFuel / 3) - 2;
    total += divByThree;
}

console.log(total);