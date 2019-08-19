function roll (){
    let x=((Math.floor(Math.random()*6))+1);
    return x;
}
var dicerollsfive = [];
function yahtzee (){
    for (let i=0; i<5; i++){
        b=roll();
        console.log(b)
        dicerollsfive.push(b)
    }
}
function yahtzeethree(){
    for (let i=0; i<3; i++){
        dicerollsfive=[];
        yahtzee();
    }
}
console.log(yahtzeethree());
console.log(dicerollsfive)