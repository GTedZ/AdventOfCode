var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let total = 0;
for (let line of input) {
    let arr = line.split('\t');

    for (let num of arr) {
        for (let secondNum of arr) {
            if (num == secondNum) continue;
            if (num % secondNum == 0) {
                total += num / secondNum;
                break;
            }
        }
    }
}
console.log(total);