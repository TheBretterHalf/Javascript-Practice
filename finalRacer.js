var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

const readlineSync = require('readline-sync');

function rollred() {
    let red = ((Math.floor(Math.random() * 6)) + 1);
    return red;
}

function rollblack() {
    let black = ((Math.floor(Math.random() * 6)) + 1);
    return black;
}

function getDeck() {
    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < values.length; x++) {
            var card = {
                Value: values[x],
                Suit: suits[i]
            };
            deck.push(card);
        }
    }
    deck.push({
        Value: "0",
        Suit: ""
    });
    deck.push({
        Value: "0",
        Suit: ""
    });
    //return deck;
}

//console.log(getDeck())

function shuffle() {
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    return deck;
}

function isval() {
    getDeck();
    //console.log('initial deck ',deck);
    do {
        //deck = shuffle();
        shuffle();
        //console.log('shuffled deck ',deck);
    }
    while (
        deck[0].Value == '0' || deck[0].Value == '1' || deck[0].Value == '2' || deck[0].Value == '11' || deck[0].Value == '12' || deck[0].Value == '13' || deck[1].Value == '0' || deck[1].Value == '1' || deck[1].Value == '2' || deck[1].Value == '11' || deck[1].Value == '12' || deck[1].Value == '13' || deck[2].Value == '0' || deck[2].Value == '1' || deck[2].Value == '2' || deck[2].Value == '11' || deck[2].Value == '12' || deck[2].Value == '13' || deck[51].Value == '0' || deck[51].Value == '1' || deck[51].Value == '2' || deck[51].Value == '11' || deck[51].Value == '12' || deck[51].Value == '13' || deck[52].Value == '0' || deck[52].Value == '1' || deck[52].Value == '2' || deck[52].Value == '11' || deck[52].Value == '12' || deck[52].Value == '13' || deck[53].Value == '0' || deck[53].Value == '1' || deck[53].Value == '2' || deck[53].Value == '11' || deck[53].Value == '12' || deck[53].Value == '13'
    )
    return deck;
}

//console.log(isval());
//make a function putting the 'markers' in an array and use the markerred/black to identify it off of that.

var pieces = [-1, -1, -1];
isval();
console.log(deck);

function playGame(marker) {
    var reddice = rollred();
    var blackdice = rollblack();
    var markerred = readlineSync.question("Which Marker Would you Like to Move " + reddice + " spaces?  1, 2, or 3?")
    //fix this function, right now it is altering the markerred value and should be adding i to the total in deck.
    let valCurrentMarkerred = marker[markerred - 1];
    if ((valCurrentMarkerred + reddice) < 53) {
        for (let i = 1; i <= reddice; i++) {
            if (deck[i + valCurrentMarkerred].Value < (reddice + blackdice)) {
                marker[markerred - 1] = valCurrentMarkerred + 1
            } else {
                marker[markerred - 1] = valCurrentMarkerred + 1
                break;
            }
        }
    }
    var markerblack = readlineSync.question("Which Marker Would you Like to Move " + blackdice + " spaces? 1, 2, or 3?")
    let valCurrentMarkerblack = marker[markerblack - 1];
    if ((valCurrentMarkerblack + blackdice) < 53) {
        for (let i = 1; i <= blackdice; i++) {
            if (deck[i + valCurrentMarkerblack].Value < (reddice + blackdice)) {
                marker[markerblack - 1] = valCurrentMarkerblack + 1
            }
            //work on adding a +1 to inital value
            //maybe a flag that breaks true on first iteration
            //only allow +1 once
            else {
                marker[markerblack - 1] = valCurrentMarkerblack + 1
                break;
            }
        }
    }
    if (marker[0] < 53 || marker[1] < 53 || marker[2] < 53) {
        console.log(marker)
        playGame(marker);
    }
}

// for (let i=0; i<reddice; i++){
//     if(deck[i+markerred].Value < (reddice+blackdice)){
//         marker[markerred-1]=marker[markerred-1]+i
//     }
//     else{
//         break;
//     }
// }


//put in functionality to run against deck cards.

console.log(playGame(pieces));

// deck = isval();

// function rollturn (playeroneturn, playertwoturn){

//     console.log(deck)
//     let dice1 = roll();
//     console.log("Player1 Roll: ", dice1)
//     for (let i=0; i<dice1; i++){
//         if(deck[i].Value < dice1){
//             playeroneturn++;
//         }
//         else{
//             break;
//         }
//     }
//     if (playeroneturn!=dice1){
//         playeroneturn++;
//     }
//     console.log("Player1: ", playeroneturn);
//     let dice2 = roll();
//     console.log("Player2 Roll: ", dice2)
//     for (let i=0; i<dice2; i++){
//         if(deck[i].Value < dice2){
//             playertwoturn++;
//         }
//         else{
//             break;
//         }
//     }
//     if (playertwoturn!=dice2){
//         playertwoturn++;
//     }
//     console.log("Player2: ", playertwoturn);
//     if(playertwoturn>=28 || playeroneturn>=28){
//         console.log("GameOver")
//     }
//     else{
//         rollturn(playeroneturn, playertwoturn);
//     }
//     return "";
// }


// console.log(rollturn(0,0))