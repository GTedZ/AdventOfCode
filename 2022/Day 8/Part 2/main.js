var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

const directions = ['top', 'bottom', 'right', 'left'];

// setting up the grid tree[][]
const tree = [];
input.forEach((line, x) => {
    tree[x] = [];
    for (let y in line) {
        tree[x][y] = parseInt(line.charAt(y));
    }
})


// calculating the perimeter (which is just x + x + y + y - 4)
let highestScenic = 0;

for (let x = 1; x < tree.length - 1; x++) {

    for (let y = 1; y < tree[0].length - 1; y++) {
        const element = tree[x][y];
        let scenic = 1;
        for (const dir of directions) {
            scenic *= getDistance(dir, tree, x, y, element);
        }
        if (highestScenic < scenic) highestScenic = scenic;
    }

}

console.log(highestScenic)

function getDistance(direction, array, x, y, origin) {
    if (direction == 'top') {

        let distance = 0;

        for (let i = x - 1; i >= 0; i--) {
            distance++;
            const element = array[i][y];
            if (element >= origin) break;
        }
        return distance;

    } else if (direction == 'bottom') {

        let distance = 0;

        for (let i = x + 1; i < array.length; i++) {
            distance++;
            const element = array[i][y];
            if (element >= origin) break;
        }
        return distance;

    } else if (direction == 'right') {

        let distance = 0;

        for (let j = y + 1; j < array[0].length; j++) {
            distance++;
            const element = array[x][j];
            if (element >= origin) break;
        }

        return distance;

    } else if (direction == 'left') {

        let distance = 0;

        for (let j = y - 1; j >= 0; j--) {
            distance++;
            const element = array[x][j];
            if (element >= origin) break;
        }

        return distance;

    }
}