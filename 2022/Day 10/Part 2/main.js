var fs = require('fs');
var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');
let cycle = -1, X = 1, str = '';
input.forEach(line => {
    let num = 0;
    if (line == 'noop') {
        cycle++;
        drawPixel();
    } else {
        num = parseInt(line.split(' ')[1]);
        cycle++;
        drawPixel();
        cycle++;
        drawPixel();
    }
    X += num;
})

console.log(str);

function drawPixel() {
    if (cycle % 40 == 0) str += '\n';
    if (X - 1 <= cycle % 40 && X + 1 >= cycle % 40) str += '#'; else str += '.';

}