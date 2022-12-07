var cell = [];
const { count } = require("console");
var fs = require("fs");

var inputs = fs.readFileSync("./input.txt").toString().replace(/\r/gm, "").split("\n");
var horiz_length = inputs[0].length - 1;
var vertical_length = inputs.length - 1;
var horiz_elements = horiz_length + 1;
var vertical_elements = vertical_length + 1;

function prepareCells() {

    for (var x = 0; x < inputs.length; x++) {
        inputs[x].split('');
        cell[x] = [];

        for (var y = 0; y < inputs[x].length; y++) {
            cell[x][y] = new Cell(parseInt(inputs[x][y]), x, y); //normal grid here

            for (var v = 0; v < 5; v++) {
                var v_index = vertical_elements * v + x;

                for (var h = 0; h < 5; h++) {
                    if (v == h && v == 0) continue;
                    var h_index = horiz_elements * h + y;
                    var newValue = parseInt(inputs[x][y]) + v + h;
                    newValue = newValue >= 10 ? newValue - 9 : newValue;
                    cell[v_index][h_index] = new Cell(newValue, v_index, h_index);
                    // console.log(cell[v_index][h_index])
                }
            }
        }
    }

    for (var x = 0; x < cell.length; x++) {
        for (var y = 0; y < cell[x].length; y++) {
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