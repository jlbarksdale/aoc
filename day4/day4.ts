import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();


const parsed = input.split("\n");
function getNums(s: string) {
    return s.split(",").map(x => {
        const nums = x.split("-");
        return [Number(nums[0]), Number(nums[1])];
    });

}

function part1(input: string[]): number {
    const answer = input.map((x): number => {

        const nums = getNums(x);
        const firstSet = nums[0];
        const secSet = nums[1];
        //console.log(nums);
        if ((firstSet[0] <= secSet[0] && firstSet[1] >= secSet[1])
            || (secSet[0] <= firstSet[0] && secSet[1] >= firstSet[1])) {
            return 1;
        }
        return 0;

    }).reduce((x, y) => x + y, 0);
    return answer;
}

function part2(input: string[]): number {
    const answer = input.map((x): number => {

        const nums = getNums(x);
        const firstSet = nums[0];
        const secSet = nums[1];
        if (((firstSet[0] >= secSet[0] && firstSet[0] <= secSet[1])
            || (firstSet[1] >= secSet[0] && firstSet[1] <= secSet[1]))
            || ((secSet[0] >= firstSet[0] && secSet[0] <= firstSet[1])
                || (secSet[1] >= firstSet[0] && secSet[1] <= firstSet[1]))) {
            return 1;
        }
        return 0;

    }).reduce((x, y) => x + y, 0);
    return answer;

}

console.log(part1(parsed));
console.log(part2(parsed));