const readlineSync = require('readline-sync');
var keepdie = 0
var dicerollsfive = [];
function roll (){
    let x=((Math.floor(Math.random()*6))+1);
    return x;
}

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
    var response = readlineSync.question('Which die are you rerolling? ');
    var keepdie = parseFloat(response, 10);
    console.log(dicerollsfive[keepdie])
    return "";
}

function callvalues(){
    yahtzee();
    dicetoreroll = [];
    console.log(dicerollsfive);
    console.log("[ 0| 1| 2| 3| 4 ]")
    var response = readlineSync.question('Which dice are you rerolling?\n');
    var rerolldie = response.split("");
    for(i=0; i<=rerolldie.length; i++){
        let val = rerolldie[i];
        console.log(val)
        dicerollsfive.splice(val-i,1);
        console.log(dicerollsfive)
        let x=((Math.floor(Math.random()*6))+1);
        dicerollsfive.push(x);
        console.log(dicerollsfive)
        return;
    }

}

function threereplace(){
    yahtzee();
    dicetoreroll = [];
    for(i=0; i<3; i++){
        console.log(dicerollsfive);
        console.log("[ 0| 1| 2| 3| 4 ]")
        var response = readlineSync.question('Which dice are you rerolling?\n');
        var rerolldie = response.split("");
        for(i=0; i<rerolldie.length; i++){
            let val = rerolldie[i];
            //console.log(val)
            dicerollsfive.splice(val-i,1);
            //console.log(dicerollsfive)
            let x=((Math.floor(Math.random()*6))+1);
            dicerollsfive.push(x);
        }
        console.log(dicerollsfive);
    }
}

console.log(threereplace());