var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split(',');

//

var highest = Math.max(...input);
console.log(highest);
var lowest = undefined;
for (var x = 0; x < highest; x++) {
    var total = 0;
    for (var y in input) {
        y = parseInt(y);
        let value = input[y];
        let diff = Math.abs(value - x);
        total += getFactorialAdd(diff);
    }
    // console.log(total);
    if (lowest == undefined) { lowest = Math.abs(total); }
    else if (lowest > Math.abs(total)) lowest = total;
}
console.log(lowest);

function getFactorialAdd(num) {
    let total = 0;
    for(var x = 1; x<=num;x++) {
        total +=x;
    } 
    return total;
}