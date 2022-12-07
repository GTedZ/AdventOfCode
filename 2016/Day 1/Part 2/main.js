var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split(', ');
const range = 200;
let loco = new Map();
for (let x = -range; x <= range; x++) {
    for (let y = -range; y <= range; y++) {
        loco.set(`${x},${y}`, false);
    }
}
loco.set('0,0', true);

let x = 0, y = 0, deg = 0;

for (let move of input) {
    let [rule, distance] = [move.slice(0, 1), parseInt(move.substring(1))]
    if (rule == 'R') deg = handleDeg(deg, 90);
    else deg = handleDeg(deg, -90);

    const [found, dist] = addDistance(deg, distance);

    if (found) {
        console.log('found!')
        console.log({ dist })
    }
}

function handleDeg(degree, addition) {
    degree += addition;
    if (degree == 360) degree = 0;
    if (degree == -90) degree = 270;
    return degree;
}

function addDistance(deg, distance) {
    console.log(distance, deg)
    for (let z = 0; z < distance; z++) {
        if (deg == 0) y++;
        else if (deg == 90) x++;
        else if (deg == 180) y--;
        else if (deg == 270) x--;

        const locoString = `${x},${y}`;

        if (loco.get(locoString) == true) return [true, Math.abs(x) + Math.abs(y)];
        else loco.set(locoString, true);
    }

    return [false, false];
}