import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', 'utf8').toString();

//A for Rock, B for Paper, and C for Scissors

//X for Rock, Y for Paper, and Z for Scissors

//played 1 for Rock, 2 for Paper, and 3 for Scissors

//outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won)
//part 2
//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win

enum Play {
     rock = 1 ,
     paper = 2, 
     scissors = 3,
};

enum Outcome{
    win = 6,
    draw = 3,
    lose = 0,
}

function calHand(p1 :string, p2: string) : number{
   let  total = 0;
    if(p1 == "A"){
        if(p2 == "X"){
            total= Play.scissors + Outcome.lose;
        }
        else if(p2 == "Y"){
            total= Play.rock + Outcome.draw;
        }
        else{
            total= Play.paper + Outcome.win;
        }
    }
    else if(p1 == "B"){
        if(p2 == "X"){
            total= Play.rock + Outcome.lose;
        }
        else if(p2 == "Y"){
            total= Play.paper + Outcome.draw;
        }
        else{
            total= Play.scissors + Outcome.win;
        }
    }
    else{
        if(p2 == "X"){
            total= Play.paper + Outcome.lose;
        }
        else if(p2 == "Y"){
            total= Play.scissors + Outcome.draw;
        }
        else{
            total= Play.rock + Outcome.win;
        }
    }
    //console.log(total);
    return total;
}




const parsed = input.split("\n").map((x)=>{
    let play = x.split(" ");
    //console.log(play);
    return calHand(play[0],play[1]);
}).reduce((a,b)=> a+b,0); 

console.log(parsed);
