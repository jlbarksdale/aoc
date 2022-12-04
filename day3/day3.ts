import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();

//console.log(input);

const parsed = input.split("\n");

function getPriorityVal(letter: string): number {
    let asciiValue = letter.charCodeAt(0);
    if (asciiValue > 96) return asciiValue - 96;
    else return asciiValue - 38;
}
function getPart1(input: string[]) {
    return input.map((x) => {
        let ruckLength = x.length / 2;
        let half1 = x.slice(0, ruckLength);
        let half2 = x.slice(ruckLength, x.length);
        //console.log(half1, half2)

        let value = 0
        for (let i = 0; i < ruckLength; i++) {
            if (half2.includes(half1[i])) {
                //add priority value
                value = getPriorityVal(half1[i]);
                break;

            }
        }
        return value;
    }).reduce((x, y) => x + y, 0);

}
function getPart2(input: string[]) {
    let answer = 0;

    for (let i = 0; i < parsed.length; i = i + 3) {
        let st1 = parsed[i];
        let st2 = parsed[i + 1];
        let st3 = parsed[i + 2];
        for (let k = 0; k < st1.length; k++) {
            if (st2.includes(st1[k]) && st3.includes(st1[k])) {
                answer += getPriorityVal(st1[k]);
                break;
            }
        }
    }
    return answer;

}





console.log(getPart1(parsed));
console.log(getPart2(parsed));
