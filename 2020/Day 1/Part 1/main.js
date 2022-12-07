var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let nums = {};
let sum = 2020;
for (let num of input) {
    nums[num] = true;
    let x = sum - num;
    if (nums[x]) console.log(x * num);
}

