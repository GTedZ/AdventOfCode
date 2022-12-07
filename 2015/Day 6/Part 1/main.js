var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

var light = [];
for (var x = 0; x < 1000; x++) {
    light[x] = [];
    for (var y = 0; y < 1000; y++) {
        light[x][y] = 0;
    }
}

for (var line of input) {
    let command = createObject(line);
    switch (command.rule) {
        case 'on':
            for (let x = command.start1; x < command.end1; x++) {
                for (let y = command.start2; y < command.end2; y++) {
                    light[x][y] = 1;
                }
            }
            break;
        case 'off':
            for (let x = command.start1; x < command.end1; x++) {
                for (let y = command.start2; y < command.end2; y++) {
                    light[x][y] = 0;
                }
            }
            break;
        case 'toggle':
            for (let x = command.start1; x < command.end1; x++) {
                for (let y = command.start2; y < command.end2; y++) {
                    light[x][y] = 0 ? 1 : 0;
                }
            }
            break;
    }
}

let count = 0;
for (var x = 0; x < 1000; x++) {
    for (var y = 0; y < 1000; y++) {
        count += light[x][y]
    }
}
console.log(count);

function createObject(line) {
    line = line.split(' ');
    if (line[0] == 'turn') return elaborateTurn(line[1], line[2], line[4]);
    else return new Rule('toggle', line[1].split(','), line[3].split(','));
}

function elaborateTurn(command, start, end) {
    return new Rule(command, start.split(','), end.split(','))
}

function Rule(rule, [start1, start2], [end1, end2]) {
    this.rule = rule;
    this.start1 = start1;
    this.start2 = start2;
    this.end1 = end1;
    this.end2 = end2;
}