var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

const directions = ['top', 'bottom', 'right', 'left'];

// setting up the grid tree[][]
let lineLength = input.length, lineHeight = input[0].length;
const tree = [];
input.forEach((line, x) => {
    tree[x] = [];
    for (let y in line) {
        tree[x][y] = parseInt(line.charAt(y));
    }
})


// calculating the perimeter (which is just x + x + y + y - 4)
let visibleTrees = lineLength * 2 + lineHeight * 2 - 4;

for (let x = 1; x < tree.length - 1; x++) {

    for (let y = 1; y < tree[0].length - 1; y++) {
        const element = tree[x][y];
        for (const dir of directions) {
            let highest = getHighestFrom(dir, tree, x, y);
            if (highest < element) {
                visibleTrees++;
                break;
            }
        }
    }

}

console.log(visibleTrees)

function getHighestFrom(direction, array, x, y) {
    if (direction == 'top') {

        let highest = -1;
        for (let i = x - 1; i >= 0; i--) {
            const element = array[i][y];
            if (element > highest) highest = element;
        }
        return highest;

    } else if (direction == 'bottom') {

        let highest = -1;

        for (let i = x + 1; i < array.length; i++) {
            const element = array[i][y];
            if (element > highest) highest = element;
        }
        return highest;

    } else if (direction == 'right') {

        let highest = -1;

        for (let j = y + 1; j < array[0].length; j++) {
            const element = array[x][j];
            if (element > highest) highest = element;
        }

        return highest;
    } else if (direction == 'left') {

        let highest = -1;

        for (let j = y - 1; j >= 0; j--) {
            const element = array[x][j];
            if (element > highest) highest = element;
        }

        return highest;
    }
}