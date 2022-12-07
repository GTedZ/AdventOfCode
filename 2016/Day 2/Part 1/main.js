var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let x = 1; y = 1, arr = [
    [1, 2, 3],  // x = 0
    [4, 5, 6],  // x = 1
    [7, 8, 9]   // x = 2
];

let str = '';
for (let line of input) {
    for (let char of line) {
        if (char == 'U') x--;
        else if (char == 'D') x++;
        else if (char == 'R') y++;
        else if (char == 'L') y--;

        if (x == -1) x = 0;
        else if (x == 3) x = 2;
        if (y == -1) y = 0;
        else if (y == 3) y = 2;
    }
    str += arr[x][y];
}

console.log(str);