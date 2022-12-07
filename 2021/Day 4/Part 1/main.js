var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "");

let tablesRawArr = input.split('\n\n');
let rolling_inputs = tablesRawArr.shift().split(',');
let tables = [];

for (let tableRaw of tablesRawArr) {
    tables.push(new Table(tableRaw));
}

function Table(inputs) {
    this.cell = inputs.split('\n');
    for (let x in this.cell) {
        this.cell[x] = this.cell[x].split(' ').filter(item => item != '');
    }
}

// tables[index].cell[x][y]

let count = 0;
for (let number of rolling_inputs) {
    number = parseInt(number);
    tables.forEach(table => removeNumber(table, number));
    for (let x in tables) {
        let response = checkIfBingo(tables[x]); // true or false
        if (response) {
            console.log(number)
            handleWinningBoard(tables[x])
            process.exit();
        }
    }
    count++;
}

function removeNumber(table, number) {
    let Cells = table.cell;

    for (let x = 0; x < Cells.length; x++) {
        for (let y = 0; y < Cells[x].length; y++) {
            if (Cells[x][y] == number) {
                Cells[x][y] = '/';
            }
        }
    }
}

function checkIfBingo(table) {
    let Cells = table.cell;
    let ifBingo = false;
    for (let horiz of Cells) {
        if (checkHoriz(horiz)) return true;
    }

    for (let x in Cells.length) {
        if (checkVertical(Cells, x)) return true;
    }

    return false;
}

function checkHoriz(arr) {
    return arr.filter(item => item == '/').length == 5 ? true : false;
}

function checkVertical(Cells, x) {
    if (Cells[x][0] == Cells[x][1] && Cells[x][0] == Cells[x][2] && Cells[x][0] == Cells[x][3] && Cells[x][0] == Cells[x][4] && Cells[x][0] == '/') return true;
    return false;
}

function handleWinningBoard(table) {
    let Cells = table.cell;
    let total = 0;
    for (let x in Cells) {

        for (let y in Cells[x]) {
            total += Cells[x][y] == '/' ? 0 : parseInt(Cells[x][y])
        }

    }
    console.log(total);
}