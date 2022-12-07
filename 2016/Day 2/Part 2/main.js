var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let arr = [
    [-1, -1, 1, -1, -1],
    [-1, 2, 3, 4, -1],
    [5, 6, 7, 8, 9],
    [-1, 'A', 'B', 'C', -1],
    [-1, -1, 'D', -1, -1]
];

let str = '';
let x = 2; y = 0;
for (let line of input) {
    for (let char of line) {
        if (char == 'U') {
            if (x != 0 && arr[x - 1][y] != -1) x--;
        } else if (char == 'D') {
            const currentArr = arr[x + 1];
            if (currentArr && currentArr[y] != -1 && currentArr != undefined) x++;
        } else if (char == 'R') {
            const currentArr = arr[x];
            if (currentArr[y + 1] != -1 && currentArr[y + 1] != undefined) y++;
        } else if (char == 'L') {
            if (y != 0 && arr[x][y - 1] != -1) y--;
        }
    }
    str += arr[x][y];
}

console.log(str);