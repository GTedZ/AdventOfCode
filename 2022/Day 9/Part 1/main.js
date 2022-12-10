var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

// setting up the grid
const SIZE = 1000;
const MIDDLE = SIZE / 2;
let grid = [];
for (let x = 0; x < SIZE; x++) {
    grid[x] = [];
    for (let y = 0; y < SIZE; y++) {
        grid[x][y] = {
            visitedByTail: false
        }
    }
}
grid[MIDDLE][MIDDLE].visitedByTail = true;

// console.log(grid);

// setting up the positions
const head = {
    pos: {
        x: MIDDLE,
        y: MIDDLE
    }
},
    tail = {
        pos: {
            x: MIDDLE,
            y: MIDDLE
        }
    };
;

// Up is x++ and Down is x--, since position starts with x = 0 instead of x = 4

input.forEach(line => {
    const [direction, amount] = line.split(' ');

    let addition, isHorizontal;
    if (direction == 'R') {
        isHorizontal = true;
        addition = 1;
    } else if (direction == 'L') {
        isHorizontal = true;
        addition = -1;
    } else if (direction == 'U') {
        isHorizontal = false;
        addition = -1;
    } else if (direction == 'D') {
        isHorizontal = false;
        addition = 1;
    }

    for (let x = 0; x < amount; x++) {
        if (isHorizontal) head.pos.y += addition;
        else head.pos.x += addition;
        checkNewTailPosition(head, tail);
    }

})

function checkNewTailPosition(head, tail) {
    let headPosition = head.pos, tailPosition = tail.pos;
    let verticalChange = false, horizChange = false;

    if (Math.abs(headPosition.x - tailPosition.x) >= 2) {
        verticalChange = true;
        tailPosition.x += headPosition.x > tailPosition.x ? 1 : -1;
        tailPosition.y = headPosition.y;
    } else if (Math.abs(headPosition.y - tailPosition.y) >= 2) {
        horizChange = true;
        tailPosition.y += headPosition.y > tailPosition.y ? 1 : -1;
        tailPosition.x = headPosition.x;
    }

    grid[tailPosition.x][tailPosition.y].visitedByTail = true;
}

let count = 0;
for (let row of grid) {
    for (let item of row) {
        if (item.visitedByTail == true) count++;
    }
}

console.log(count);