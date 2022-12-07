var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

var cells = [];
for (var x in input) {
    arr = input[x].split('');
    cells[x] = new Array();
    for (var y in arr) {
        cells[x][y] = new Cell(arr[y]);
    }
}

let total = 0;
for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[x].length; y++) {

        for (var i = x - 1; i <= x + 1; i++) {
            if (i == x || i < 0 || i >= cells.length) continue;
            cells[x][y].neighbors.push(cells[i][y].value);
        }

        for (var j = y - 1; j <= y + 1; j++) {
            if (j == y || j < 0 || j >= cells[0].length) continue;
            cells[x][y].neighbors.push(cells[x][j].value);
        }

        let lowPoint = true;
        for (var neighbor of cells[x][y].neighbors) {
            if (neighbor <= cells[x][y].value) lowPoint = false;
        }
        if (lowPoint) {
            console.log(cells[x][y], 'at', x, y, 'is a low point')
            total += 1 + cells[x][y].value;
        }
    }
}

console.log(total);

function Cell(value) {
    this.value = parseInt(value);
    this.neighbors = new Array();
}