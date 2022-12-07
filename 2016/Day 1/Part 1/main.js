var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split(', ');

let x = 0, y = 0, deg = 0;

for (let move of input) {
    let [rule, distance] = [move.slice(0, 1), parseInt(move.substring(1))]
    if (rule == 'R') deg = handleDeg(deg, 90);
    else deg = handleDeg(deg, -90);
    
    if (deg == 0) y += distance;
    else if (deg == 90) x += distance;
    else if (deg == 180) y -= distance;
    else if (deg == 270) x -= distance;
}

console.log(Math.abs(x) + Math.abs(y));

function handleDeg(degree, addition) {
    degree += addition;
    if (degree == 360) degree = 0;
    if (degree == -90) degree = 270;
    return degree;
}