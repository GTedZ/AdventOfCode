var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n\n');

const monkeys = [];
for (let monkey of input) { // setting up the monkey objects
    let [, startingItems, Operation, Test, ifTrue, ifFalse] = monkey.split('\n');
    let monkeyObj = {
        items: (startingItems.split(':')[1]).split(',').map(s => parseInt(s)),
        operation: (Operation.split('= ')[1]).split(' '),
        test: parseInt(Test.split('by ')[1]),
        ifTrue: parseInt(ifTrue.split('monkey ')[1]),
        ifFalse: parseInt(ifFalse.split('monkey ')[1]),
        itemsInspected: 0
    };
    monkeys.push(monkeyObj);
}

const ROUNDS = 20;
for (let x = 0; x < ROUNDS; x++) {
    for (let monkey of monkeys) {
        handleTurn(monkey);
    }

}
console.log(monkeys);

function handleTurn(monkey) {
    while (monkey.items.length != 0) {
        let item = monkey.items.shift();
        let [num, op, num2] = monkey.operation;
        if (num == 'old') num = item;
        if (num2 == 'old') num2 = item;
        if (op == '+') item = parseInt(num) + parseInt(num2);
        else if (op == '*') item = num * num2;
        else { console.log("ERROR ERROR OP NOT FOUND"); process.exit() }
        item = Math.floor(item / 3);
        let toMonkey = monkey.ifFalse;
        if (item % monkey.test == 0) toMonkey = monkey.ifTrue;
        monkeys[toMonkey].items.push(item);
        monkey.itemsInspected++;
    }
}