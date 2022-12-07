var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

var cells = [];
var lowPoints = [];
for (var x in input) {
    arr = input[x].split('');
    cells[x] = new Array();
    for (var y in arr) {
        cells[x][y] = new Cell(arr[y], x, y);
    }
}

for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[x].length; y++) {

        for (var i = x - 1; i <= x + 1; i++) {
            if (i == x || i < 0 || i >= cells.length) continue;
            cells[x][y].neighbors.push(cells[i][y]);
        }

        for (var j = y - 1; j <= y + 1; j++) {
            if (j == y || j < 0 || j >= cells[0].length) continue;
            cells[x][y].neighbors.push(cells[x][j]);
        }

        let lowPoint = true;
        for (var neighbor of cells[x][y].neighbors) {
            if (neighbor <= cells[x][y].value) lowPoint = false;
        }
        if (lowPoint) {
            lowPoints.push(cells[x][y]);
        }
    }
}

// console.log(lowPoints)
console.log(lowPoints.length)
lowPoints.forEach(handleLowPoints);

function handleLowPoints(cell) {
    let queue = [cell];
    let size = 0;
    while (queue.length > 0) {
        let checked = [];
        size = checkNeighbors(queue, checked, size);
    }
    console.log({ size });
}

function checkNeighbors(queue, checked, size) {
    let currentCell = queue.shift();
    let key = `${currentCell.x}-${currentCell.y}`;
    if (checked.includes(key)) return size;
    checked.push(key);

    let currentCellValue = currentCell.value;
    for (let neighbor of currentCell.neighbors) {
        if (currentCellValue < neighbor.value) {
            size++;
            queue.push(neighbor);
        }
    }
    return size;
}

/////

function Cell(value, x, y) {
    this.value = parseInt(value);
    this.x = x;
    this.y = y;
    this.neighbors = new Array();
}