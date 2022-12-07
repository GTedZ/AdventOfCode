var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let nums = {};
let sum = 2020;
for (let firstNum of input) {
    firstNum = parseInt(firstNum);
    nums[firstNum] = true;
    let twoSum = sum - firstNum;

    for (let secondNum of input) {
        secondNum = parseInt(secondNum)
        if (secondNum == firstNum) continue;

        let numToFind = twoSum - secondNum;
        if (nums[numToFind]) console.log(firstNum, secondNum, numToFind, firstNum * secondNum * numToFind)
    }
}

