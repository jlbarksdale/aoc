import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();
const instructions = input.split("\n").map(str => str.split(" "));

//console.log(instructions);
const Right = "R";
const Left = "L";
const Up = "U";
const Down = "D";

let headX = 0;
let headY = 0;
let tailX = 0;
let tailY = 0;
let moveSet = new Set();
moveSet.add(tailX + "," + tailY);

function touchingHead(): boolean {
    if (Math.abs(headX - tailX) > 1 || Math.abs(headY - tailY) > 1) {
        return false;
    }
    return true;
}

function moveTail() {
    //console.log("head at", headX, headY, " need to move tail from", tailX, tailY);
    if (headY == tailY) {
        if (headX > tailX) tailX++;
        else tailX--;
    }
    if (headX == tailX) {
        if (headY > tailY) tailY++;
        else tailY--;
    }
    //diagonal top left
    if ((headX == tailX - 1 && headY == tailY + 2) || (headX == tailX - 2 && headY == tailY + 1)) {
        tailX--;
        tailY++;
    }
    //diagonal top right
    if ((headX == tailX + 2 && headY == tailY + 1) || (headX == tailX + 1 && headY == tailY + 2)) {
        tailX++;
        tailY++;
    }
    //diagonal bottom left
    if ((headX == tailX - 2 && headY == tailY - 1) || (headX == tailX - 1 && headY == tailY - 2)) {
        tailX--;
        tailY--;
    }
    //diagonal bottom right
    if ((headX == tailX + 2 && headY == tailY - 1) || (headX == tailX + 1 && headY == tailY - 2)) {
        tailX++;
        tailY--;
    }
    //console.log("moved tail to", tailX, tailY);
}

for (let i = 0; i < instructions.length; i++) {
    const moveDirection = instructions[i][0];
    const steps = Number(instructions[i][1]);
    for (let m = 0; m < steps; m++) {
        if (moveDirection == Right) headX++;
        if (moveDirection == Left) headX--;
        if (moveDirection == Up) headY++;
        if (moveDirection == Down) headY--;

        if (!touchingHead()) {
            moveTail();
            moveSet.add(tailX + "," + tailY);
        }
        //console.log(headX, headY);
    }
}

console.log(moveSet.size);





