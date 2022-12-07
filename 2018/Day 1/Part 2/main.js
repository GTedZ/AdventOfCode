var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

let frequencies = new Map();
frequencies.set('0', true);
let total = 0;

while (true) {
    for (let line of input) {
        const frequency = parseInt(line);
        total += frequency;

        const freqString = `${total}`;
        if (frequencies.get(freqString)) {
            console.log(freqString, 'reached twice');
            break;
        }
        else {
            frequencies.set(freqString, true);
        }


    }
}