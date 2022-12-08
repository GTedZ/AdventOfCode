var fs = require('fs');

var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n');

const strings = {};

const templateString = input[0];
for (let x = 0; x < templateString.length; x++) {

    for (let word of input) {
        const char = word.charAt(x);
        
    }

}