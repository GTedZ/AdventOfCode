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
    this.won = false;
    for (let x in this.cell) {
        this.cell[x] = this.cell[x].split(' ').filter(item => item != '');
    }
}

// tables[index].cell[x][y]

let winningTables = [];
for (let number of rolling_inputs) {
    number = parseInt(number);
    tables.forEach(table => removeNumber(table, number));
    for (let x in tables) {
        let response = checkIfBingo(tables[x]); // true or false
        if (response) handleOnBoardWin(tables[x], number, x)
    }
}

let lastTable_that_won = winningTables[winningTables.length - 1];
// handleWinningBoard(lastTable_that_won);
// console.log(lastTable_that_won.winningNumber);

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

    for (let x in Cells) {
        if (checkVertical(Cells, x)) return true;
    }

    return false;
}

function checkHoriz(arr) {
    return arr.filter(item => item == '/').length == 5 ? true : false;
}

function checkVertical(Cells, x) {
    if (Cells[0][x] == Cells[1][x] && Cells[1][x] == Cells[2][x] && Cells[2][x] == Cells[3][x] && Cells[3][x] == Cells[4][x]) return true;
    return false;
}

function handleWinningBoard(table) {
    console.log(table);
    let Cells = table.CellsAtWin;
    let total = 0;
    for (let x in Cells) {

        for (let y in Cells[x]) {
            total += Cells[x][y] == '/' ? 0 : parseInt(Cells[x][y])
        }

    }
    console.log(total);
}


function handleOnBoardWin(table, winning_number, index) {
    if (table.won == false) {
        table.won = true;
        table.winningNumber = winning_number;
        table.CellsAtWin = [...table.cell];
        console.log(table.CellsAtWin, winning_number)
        winningTables.push(table);
    }
}