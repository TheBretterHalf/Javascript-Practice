const readline = require('readline');
var keepdie = 0
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function roll (){
    let x=((Math.floor(Math.random()*6))+1);
    return x;
}
var dicerollsfive = [];
function yahtzee (){
    for (let i=0; i<5; i++){
        b=roll();
        //console.log(b)
        dicerollsfive.push(b)
    }
}
function yahtzeethree(){
    for (let i=0; i<3; i++){
        dicerollsfive=[];
        yahtzee();
    }
}
function callvalue(){
    yahtzee();
    console.log(dicerollsfive);
    console.log("[ 0| 1| 2| 3| 4 ]")
    var response = rl.question('Which die are you rerolling? ', answer);
    function answer (response){
        var keepdie = parseFloat(response, 10);
        console.log(dicerollsfive[keepdie])
        rl.close();
    }
    return "";
}
function callvalues(){
    yahtzee();
    dicetokeep = [];
    console.log(dicerollsfive);
    console.log("[ 0| 1| 2| 3| 4 ]")
    var response = rl.question('Which dice are you rerolling? ', answer);
    function answer (response){
        var keepdie = response.split("");
        for (i=0; i<keepdie.length; i++){
            let val = parseFloat(keepdie[i], 10);
            dicetokeep.push(dicerollsfive[val])
        }
        console.log(dicetokeep);

        rl.close();
    }
    return "";
}

console.log(callvalues());
//console.log(dicerollsfive)