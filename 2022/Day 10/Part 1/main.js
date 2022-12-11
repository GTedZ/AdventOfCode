var fs = require('fs');
var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');
let cycles = [20, 60, 100, 140, 180, 220], cycle = 0, X = 1, sum = 0, currentCycle = cycles.shift();  // pops the first element from the array cycles

input.forEach(line => {
    let num = 0;
    if (line == 'noop') cycle++;
    else {
        num = parseInt(line.split(' ')[1]);
        cycle += 2;
    }
    checkCycle();
    X += num;
})

console.log(sum);

function checkCycle() {
    if (cycle >= currentCycle) {
        console.log({ currentCycle, X, total: currentCycle * X })
        sum += currentCycle * X;
        currentCycle = cycles.shift();
    }
}