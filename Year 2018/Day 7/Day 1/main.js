const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().replace(/\r/gm, '').split('\n');
input.shift(); // remove the first element

const HardDrive = {
    dirs: [],
    localFileSizes: 0
};
let = currentDir = HardDrive;

function newDirectory(obj) {
    return {
        dirs: [],
        previousDir: obj,
        localFileSizes: 0
    }
}

input.forEach(line => {
    if (line.includes('$ ls')) return;
    else if (line.includes('dir') && line.charAt(0) == 'd') {
        const [, dirName] = line.split(' ');
        if (!currentDir[dirName]) {
            currentDir[dirName] = newDirectory(currentDir);
            currentDir.dirs.push(dirName);
        }
    } else if (line.includes('$ cd')) {
        const [, , dirName] = line.split(' ');
        if (dirName == '..') {
            currentDir = currentDir.previousDir;
        } else if (dirName == '/') currentDir = HardDrive;
        else currentDir = currentDir[dirName];
    } else {
        const [size, fileName] = line.split(' ');
        currentDir.localFileSizes += parseFloat(size);
        currentDir[fileName] = parseFloat(size);
    }
})

let dirSizes = [];

getFullSizes(HardDrive);
function getFullSizes(OBJ) {
    OBJ.fullSize = OBJ.localFileSizes;
    for (let dir of OBJ.dirs) {
        OBJ.fullSize += getFullSizes(OBJ[dir]);
    }

    dirSizes.push(OBJ.fullSize);
    return OBJ.fullSize;
}

const DESIREDSIZE = 100000

let desiredSizes = dirSizes.filter(size => size <= DESIREDSIZE);

console.log(desiredSizes.reduce((i, e) => i + e))