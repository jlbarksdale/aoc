import { timingSafeEqual } from 'crypto';
import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();
const instructions = input.split("\n").map(str => str.split(" "));

const Right = "R";
const Left = "L";
const Up = "U";
const Down = "D";

type Knot = {
    x: number,
    y: number,
}

function touchingKnotAhead(head: Knot, knot: Knot): boolean {
    if (Math.abs(head.x - knot.x) > 1 || Math.abs(head.y - knot.y) > 1) {
        return false;
    }
    return true;
}

function moveKnot(head: Knot, knot: Knot) {

    let diffX = head.x - knot.x;
    let diffY = head.y - knot.y;

    knot.x += Math.sign(diffX);
    knot.y += Math.sign(diffY);
}

function run(numOfKnots: number): number {

    let knots: Array<Knot> = [];
    for (let i = 0; i <= numOfKnots; i++) {
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

            for (let j = 1; j <= numOfKnots; j++) {
                //console.log(`checking if ${j} is touching ${j - 1}`);
                if (!touchingKnotAhead(knots[j - 1], knots[j])) {
                    moveKnot(knots[j - 1], knots[j]);

                }
                if (j == numOfKnots) {
                    moveSet.add(knots[j].x + "," + knots[j].y);
                }
            }
        }
    }
    return moveSet.size;
}
//part 1
console.log(run(1));
//part 2 doesn't work
console.log(run(9));





