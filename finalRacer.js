var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

function rollred (){
    let red=((Math.floor(Math.random()*6))+1);
    return red;
}
function rollblack (){
    let black=((Math.floor(Math.random()*6))+1);
    return black;
}

function getDeck()
{
	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
    }
    deck.push({Value: "0", Suit: ""});
    deck.push({Value: "0", Suit: ""});
	//return deck;
}

//console.log(getDeck())

function shuffle()
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    return deck;
}

function isval (){
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

console.log(isval())

// function isval (){
//     getDeck();
//     //console.log('initial deck ',deck);
//     do {
//         //deck = shuffle();
//         shuffle();
//         //console.log('shuffled deck ',deck);
//     }
//     while (
//         deck[0].Value == '1' || deck[0].Value == '2' || deck[0].Value == '6' || deck[0].Value == '7' || deck[1].Value == '1' || deck[1].Value == '2' || deck[1].Value == '6' || deck[1].Value == '7' || deck[26].Value == '1' || deck[26].Value == '2' || deck[26].Value == '6' || deck[26].Value == '7' || deck[27].Value == '1' || deck[27].Value == '2' || deck[27].Value == '6' || deck[27].Value == '7'
//     )
//     return deck;
// }

// //console.log(deck.length);

// //find way of keeping board constant
// //
// //call the roll turn function recursively.
// //
// //below add player one, then player two turns to each other and set limiter to # of cards.

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
