var { prepareCells } = require('./prep');
var cell = prepareCells();
cell[0][0].weight = 1;

var toVisit = [cell[0][0]];

while (toVisit.length != 0) {
    dijkstras(toVisit[0]);
}

function dijkstras(cur) {
    toVisit.splice(0, 1);
    if (cur.visited) return;
    for (var i in cur.neighbors) {

        var neighbor = cur.neighbors[i];
        var new_weight = cur.weight + neighbor.value;

        if (new_weight < neighbor.weight) {
            neighbor.weight = new_weight;
            neighbor.visited = false;
        }
        toVisit.push(neighbor);
    }

    cur.visited = true;
}

var horiz_length = cell[0].length - 1;
var vertical_length = cell.length - 1;
console.log(cell[horiz_length][vertical_length])