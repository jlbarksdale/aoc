import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();



const parsed = input.split("\n").map(x => x.split("")).map(x => x.map(x => Number(x)));

const yDimension = parsed.length;
const xDimension = parsed[0].length;

type treeValues = {
    isVisible: boolean,
    score: number,
}


function checkDown(x: number, y: number): number {
    let currentVal = parsed[y][x];
    let score = 0;
    for (let i = y - 1; i >= 0; i--) {

        //part 1
        // if (parsed[i][x] >= currentVal) return false;
        //part 2
        score++;
        if (parsed[i][x] >= currentVal) return score;
    }
    return score;
}

function checkUp(x: number, y: number): number {
    let currentVal = parsed[y][x];
    let score = 0;
    for (let i = y + 1; i < yDimension; i++) {
        //part 1
        // if (parsed[i][x] >= currentVal) return false;
        //part 2
        score++;
        if (parsed[i][x] >= currentVal) {
            //console.log(parsed[i][x], "blocks", currentVal, "returning", score);
            return score;
        }
    }
    return score;

}

function checkLeft(x: number, y: number): number {
    let currentVal = parsed[y][x];
    let score = 0;

    for (let i = x - 1; i >= 0; i--) {
        //part 1
        // if (parsed[i][x] >= currentVal) return false;
        //part 2
        score++;
        if (parsed[y][i] >= currentVal) return score;
    }
    return score;
}

function checkRight(x: number, y: number): number {
    let currentVal = parsed[y][x];
    let score = 0;

    for (let i = x + 1; i < xDimension; i++) {
        //part 1
        // if (parsed[i][x] >= currentVal) return false;
        //part 2
        score++;
        if (parsed[y][i] >= currentVal) return score;
    }
    return score;
}
//part1
// function isVisible(x: number, y: number): boolean {
//     if (checkDown(x, y) || checkUp(x, y) || checkLeft(x, y) || checkRight(x, y)) return true;

//     return false;
// }
//let totalVisible = 0;

//part2
function getTreeScore(x: number, y: number): number {
    let left = checkLeft(x, y);
    let right = checkRight(x, y);
    let down = checkDown(x, y);
    let up = checkUp(x, y);
    return left * right * down * up;
}

let treeMax = 0;
for (let y = 1; y < yDimension - 1; y++) {
    for (let x = 1; x < xDimension - 1; x++) {

        let currTreeScore = getTreeScore(x, y)
        if (currTreeScore > treeMax) treeMax = currTreeScore;

    }
}
//part1
//console.log(totalVisible + (xDimension * 2 + (yDimension - 2) * 2));

//part 2
console.log(treeMax);
// getTreeScore(2, 1);