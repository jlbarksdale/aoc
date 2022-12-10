import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();
const instructions = input.split("\n").map(str => str.split(" "));

//console.log(instructions);
const Right = "R";
const Left = "L";
const Up = "U";
const Down = "D";

type Knot = {
    x: number,
    y: number,
}

function touchingKnotAHead(head: Knot, knot: Knot): boolean {
    if (Math.abs(head.x - knot.x) > 1 || Math.abs(head.y - knot.y) > 1) {
        return false;
    }
    return true;
}

function moveKnot(head: Knot, knot: Knot) {
    //console.log("head at", head.x, head.y, " need to move tail from", knot.x, knot.y);
    if (head.y == knot.y) {
        if (head.x > knot.x) knot.x++;
        else knot.x--;
    }
    if (head.x == knot.x) {
        if (head.y > knot.y) knot.y++;
        else knot.y--;
    }
    //diagonal top left
    if ((head.x == knot.x - 1 && head.y == knot.y + 2) || (head.x == knot.x - 2 && head.y == knot.y + 1)) {
        knot.x--;
        knot.y++;
    }
    //diagonal top right
    if ((head.x == knot.x + 2 && head.y == knot.y + 1) || (head.x == knot.x + 1 && head.y == knot.y + 2)) {
        knot.x++;
        knot.y++;
    }
    //diagonal bottom left
    if ((head.x == knot.x - 2 && head.y == knot.y - 1) || (head.x == knot.x - 1 && head.y == knot.y - 2)) {
        knot.x--;
        knot.y--;
    }
    //diagonal bottom right
    if ((head.x == knot.x + 2 && head.y == knot.y - 1) || (head.x == knot.x + 1 && head.y == knot.y - 2)) {
        knot.x++;
        knot.y--;
    }
    //console.log("moved tail to", knot.x, knot.y);
}

function run(numOfKnots: number): number {

    let knots: Array<Knot> = [];
    for (let i = 0; i < numOfKnots; i++) {
        knots.push({
            x: 0,
            y: 0
        })
    }
    let moveSet = new Set();

    moveSet.add(0 + "," + 0);

    for (let i = 0; i < instructions.length; i++) {
        const moveDirection = instructions[i][0];
        const steps = Number(instructions[i][1]);
        for (let m = 0; m < steps; m++) {
            if (moveDirection == Right) knots[0].x++;
            if (moveDirection == Left) knots[0].x--;
            if (moveDirection == Up) knots[0].y++;
            if (moveDirection == Down) knots[0].y--;

            for (let j = 1; j < numOfKnots; j++) {
                if (!touchingKnotAHead(knots[j - 1], knots[j])) {
                    moveKnot(knots[j - 1], knots[j]);
                    if (numOfKnots - 1) moveSet.add(knots[j].x + "," + knots[j].y);
                }
            }

            //console.log(head.x, head.y);
        }
    }

    return moveSet.size;
}
//part 1;
console.log(run(2));
//console.log(run(9));





