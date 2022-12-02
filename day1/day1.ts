import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString().trim();


const parsed = input.split("\n\n")
                    .map(x=>x.split('\n')
                    .map((x)=> Number(x))
                    .reduce((prev, curr) => prev+curr,0))


parsed.sort(function(a, b) {
  return b - a;
});

//part 1
console.log(parsed[0]);
//part 2
console.log(parsed.slice(0,3).reduce((a,b)=> a+b,0));

