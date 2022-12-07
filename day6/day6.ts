import { ftruncate, readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();

//console.log(input);



function getIndex(setSize: number): number {
    let frontIndex = 0;
    let backIndex = setSize;
    while (backIndex <= input.length) {
        //console.log(input.slice(frontIndex, backIndex));

        const slice = new Set(input.slice(frontIndex, backIndex));
        //console.log(slice.size);
        if (slice.size == setSize) break;

        frontIndex++;
        backIndex++;
    }
    return backIndex;
}


//part 1
console.log(getIndex(4));
//part2
console.log(getIndex(14));
