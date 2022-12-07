var cell = [];
var fs = require("fs");

var inputs = fs.readFileSync("./input.txt").toString().replace(/\r/gm, "").split("\n");
var horiz_length = inputs[0].length - 1;
var vertical_length = inputs.length - 1;

function prepareCells() {

    for (var x = 0; x < inputs.length; x++) {
        inputs[x].split('');
        cell[x] = [];

        for (var y = 0; y < inputs[x].length; y++) {
            cell[x][y] = new Cell(parseInt(inputs[x][y]), x, y);

        }
    }

    for (var x = 0; x < inputs.length; x++) {
        for (var y = 0; y < inputs[x].length; y++) {
            cell[x][y].neighbors = findMyNeighbors(x, y);
        }
    }


    
    return cell;
}

function findMyNeighbors(i, j) {

    var cur_neighbors = [];

    for (var X = i - 1; X <= i + 1; X++) {
        for (var Y = j - 1; Y <= j + 1; Y++) {

            if ((X == i && Y == j) || X < 0 || X > horiz_length || Y < 0 || Y > vertical_length) continue;
            if ((X == i + 1 && Y == j + 1) || (X == i + 1 && Y == j - 1) || (X == i - 1 && Y == j - 1) || (X == i - 1 && Y == j + 1)) continue;
            cur_neighbors.push(cell[X][Y]);
        }
    }

    return cur_neighbors;
}

function Cell(value, X, Y) {
    this.value = value;
    this.position = {
        x: X,
        y: Y
    }
    this.visited = false;
    this.weight = Infinity;
    this.neighbors = [];
}

module.exports = {
    prepareCells
}