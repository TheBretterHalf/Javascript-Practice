const readline = require('readline');
var keepdie = 0
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
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
    dicetoreroll = [];
    for(i=0; i<3; i++){
        console.log(dicerollsfive);
        console.log("[ 0| 1| 2| 3| 4 ]")
        var response = rl.question('Which dice are you rerolling? ', answer);
        function answer (response){
            var rerolldie = response.split("");
            // for (i=0; i<rerolldie.length; i++){
            //     let val = parseFloat(rerolldie[i], 10);
            //     dicetoreroll.push(dicerollsfive[val])
            // }
            //console.log(dicetoreroll);
            for(i=0; i<rerolldie.length; i++){
                let val = parseFloat(rerolldie[i], 10);
                console.log(val)
                dicerollsfive.splice(val-i,1);
                let x=((Math.floor(Math.random()*6))+1);
                dicerollsfive.push(x);
                rl.close();
            }
            console.log(dicerollsfive)
        }
    }
    return "";
}


console.log(callvalues());
//console.log(dicerollsfive)