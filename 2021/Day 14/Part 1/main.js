var fs = require('fs');
var input = fs.readFileSync('inputs.txt').toString().replace(/\r/gm, "").split('\n\n');

////

var polymer, rules = [], cached_pairs = new Map();
console.time('prep')
prepare();
console.timeEnd('prep');

function prepare() {
    polymer = input[0];
    rules = prepRules(input[1].split('\n'));
}

function prepRules(arr) {
    var rules = {};
    arr.forEach(line => {
        line = line.split(' -> ');
        rules[line[0]] = line[1];
    });

    return rules;
}

//// prep ^^

function polyzation_and_return_polymer(polymer, iterations) {
    var letters = [];

    for (var x in polymer) {
        countChars(polymer.charAt(x), letters);
    }

    for (var x = 1; x <= iterations; x++) {
        var index = 0;

        for (; index < polymer.length - 1; index++) {

            var pair = polymer.charAt(index) + polymer.charAt(index + 1);

            if (rules[pair]) {
                polymer = insertElement(rules[pair], ++index, polymer, letters);
            }
        }
    }

    return [letters, polymer];
}

function polyzation(polymer, iterations) {
    var letters = [];

    for (var x in polymer) {
        countChars(polymer.charAt(x), letters);
    }

    for (var x = 1; x <= iterations; x++) {
        var index = 0;

        for (; index < polymer.length - 1; index++) {

            var pair = polymer.charAt(index) + polymer.charAt(index + 1);

            if (rules[pair]) {
                polymer = insertElement(rules[pair], ++index, polymer, letters);
            }
        }
    }

    return letters;
}

function insertElement(element, index, polymer, letters) {
    countChars(element, letters);
    return polymer.slice(0, index) + element + polymer.slice(index);
}

function countChars(char, letters) {
    if (letters[char]) {
        letters[char]++;
    } else {
        letters[char] = 1;
    }
}

function add_to_total_letters(map_letters) {
    // console.log('total before', total)
    // console.log(map_letters)
    for (var key of Object.keys(map_letters)) {
        if (total[key]) total[key] += map_letters[key];
        else total[key] = map_letters[key];
    }
    // console.log('total after', total)
}

//// algorithm

console.time('Alg');        //getting initial string
var [letters, result_string] = polyzation_and_return_polymer(polymer, 10);
console.timeEnd('Alg');
// console.log(letters);
result_string = polymer

console.time('Alg');        //caching pairs now
var index = 0;
var total = [];

for (; index < result_string.length - 1; index++) {

    var pair = result_string.charAt(index) + result_string.charAt(index + 1);
    if (cached_pairs[pair]) {
        add_to_total_letters(cached_pairs[pair])
    } else {
        cached_pairs[pair] = polyzation(pair, 10);
        add_to_total_letters(cached_pairs[pair])
    }

}
console.log(letters);
console.log(cached_pairs)
// console.log('total', total);
// console.log(letters);
// console.log(cached_pairs)
