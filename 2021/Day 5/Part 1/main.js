var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "");
input = input.split(",");

var days = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let lifespan of input) {
    days[lifespan]++;
}

for (let x = 0; x < 256; x++) {
    shiftAllDays_and_add_to_day6(days);
}

let total = 0;
for (let num of days) total += num;

console.log(total)


function shiftAllDays_and_add_to_day6(arr) {
    let temp = arr.shift();
    arr[8] = temp;
    arr[6] += temp;
}