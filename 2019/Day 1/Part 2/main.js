var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let fuel of input) {
    let remainingFuel = fuel;
    while (remainingFuel > 0) {
        let totalFuel = parseInt(remainingFuel);
        let divByThree = Math.floor(totalFuel / 3) - 2;
        remainingFuel = divByThree;
        if (remainingFuel > 0) total += divByThree;
    }
}

console.log(total);