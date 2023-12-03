var fs = require('fs');

var grid = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let startingPoint = false, endPoint = false;

for (let x = 0; x < grid.length; x++) {
    grid[x] = grid[x].split('');
    for (let y = 0; y < grid[x].length; y++) {
        const value = alphabet.indexOf(grid[x][y]);
        grid[x][y] = {
            value,
            x,
            y,
            neighbors: []
        }
        if (grid[x][y].value == -1) {

            if (!startingPoint) {
                grid[x][y].value = 0;
                startingPoint = grid[x][y];
            } else {
                grid[x][y].value = 25;
                endPoint = grid[x][y];
            }

        }
    }
}

for (let x = 0; x < grid.length; x++) {

    for (let y = 0; y < grid[x].length; y++) {

        const currentValue = grid[x][y].value;
        let neighbors = [];
        neighbors.push(grid[x - 1] ? grid[x - 1][y] : undefined);
        neighbors.push(grid[x + 1] ? grid[x + 1][y] : undefined);
        neighbors.push(grid[x][y - 1]);
        neighbors.push(grid[x][y + 1]);
        neighbors.forEach(item => {
            if (item) {
                if (currentValue + 1 >= item.value) {
                    grid[x][y].neighbors.push(item);
                }
            }
        })

    }

}

DFS(startingPoint, endPoint);
function DFS(current, endPoint, steps = 0, path = []) {
    path.push(current);
    if (current == endPoint) console.log("PATH FOUND:", steps);
    else {
        for (let neighbor of current.neighbors) {
            if (path.includes(neighbor)) continue;
            DFS(neighbor, endPoint, steps + 1, path);
        }
    }
}