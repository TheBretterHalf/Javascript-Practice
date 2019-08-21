const readlineSync = require('readline-sync');

function rolldie(){
    let x=((Math.floor(Math.random()*20))+1);
    return x;
}

function detectcrit(x){
    //let x = rolldie()
    if (x==20 || x==1){
        console.log("critical joe "+ x)
    }
    else{
        console.log(x)
    }
    return "";
}

function modifier(x){
    var modify = readlineSync.question("Modifier Input: ");
    var result = parseInt(modify, 10)+parseInt(x, 10);
    console.log(result);
    return result;
}

function enemyArmor(){
    var armor = readlineSync.question("Enemy Armor Class: ")
    console.log(parseInt(armor))
    return armor;
}

function hitornot(){
    x = rolldie();
    console.log(x)
    var attack = modifier(x);
    console.log("atk "+attack)
    var defense = enemyArmor();
    console.log("def "+ defense)
    if(x==20){
        console.log("hit");
    }
    if(x==1){
        console.log("miss");
    }
    if(attack>defense){
        console.log("hit");
    }
    if(attack<defense){
        console.log("miss")
    }
    return "";
}

function weaponMod (){
    weaponmodifier = 0;
    var dice = readlineSync.question("Enter #d#, Number of dice 'd' and cap of die: ");
    var dicerolls = dice.split('d');
    //console.log(dicerolls);
    var numOfDice = parseInt(dicerolls[1])
    for (i=0; i<numOfDice; i++){
        var diceCap = parseInt(dicerolls[0]);
        let x=((Math.floor(Math.random()*diceCap))+1);
        weaponmodifier+=x;
        }
        console.log(weaponmodifier)
}

function damage(){
    var attkpwr = 0;
    x = rolldie();
    console.log(x)
    var attack = modifier(x);
    console.log("atk "+attack)
    var defense = enemyArmor();
    console.log("def "+ defense)
    if(x==20){
        console.log("hit, " +"damage: "+ attack );
    }
    if(x==1){
        console.log("miss");
    }
    if(attack>defense){
        console.log("hit, "+"damage: "+ (attack-defense));
    }
    if(attack<defense){
        console.log("miss")
    }
    return "";
}
console.log(damage());

