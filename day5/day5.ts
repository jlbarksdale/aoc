import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();
const parsed = input.split("\n").map(s => s.split(" "));

//Hard coded the input as to no spend as much time on parsing.
let stacks = [
    ["S", "L", "W"],
    ["J", "T", "N", "Q"],
    ["S", "C", "H", "F", "J"],
    ["T", "R", "M", "W", "N", "G", "B"],
    ["T", "R", "L", "S", "D", "H", "Q", "B"],
    ["M", "J", "B", "V", "F", "H", "R", "L"],
    ["D", "W", "R", "N", "J", "M"],
    ["B", "Z", "T", "F", "H", "N", "D", "J"],
    ["H", "L", "Q", "N", "B", "F", "T"],
];


//PART 1
// parsed.map((move) => {
//     let count = Number(move[1]);
//     let from = Number(move[3]);
//     let to = Number(move[5]);
//     for (let i = 0; i < count; i++) {
//         let letter = stacks[from - 1].pop();
//         if (letter != undefined)
//             stacks[to - 1].push(letter);
//     }
// });

//PART 2
parsed.map((move) => {
    let count = Number(move[1]);
    let from = Number(move[3]);
    let to = Number(move[5]);
    let tempStack: string[] = [];
    for (let i = 0; i < count; i++) {
        let letter = stacks[from - 1].pop();
        if (letter != undefined)
            tempStack.push(letter);
    }
    stacks[to - 1] = stacks[to - 1].concat(tempStack.reverse());

});

stacks.map(s => {
    let l = s.length;
    console.log(s[l - 1]);
});
