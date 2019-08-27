var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7"];

function roll (){
    let x=((Math.floor(Math.random()*6))+1);
    return x;
}

function getDeck()
{
	let deck = new Array();
	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
    }
	return deck;
}

function shuffle()
{
    let deck = getDeck();
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
    let deck = shuffle();
    do {
        deck = shuffle();
    }
    while (
        deck[0].Value == 'A' || deck[0].Value == '2' || deck[0].Value == '6' || deck[0].Value == '7' || deck[1].Value == 'A' || deck[1].Value == '2' || deck[1].Value == '6' || deck[1].Value == '7' || deck[26].Value == 'A' || deck[26].Value == '2' || deck[26].Value == '6' || deck[26].Value == '7' || deck[27].Value == 'A' || deck[27].Value == '2' || deck[27].Value == '6' || deck[27].Value == '7'
    )
    return deck;
}

function twoplayerstart (){
    let playerone = -1
    let playertwo = -1
    return playerone, playertwo;
}

function startgame (){
    let deck = isval();
    let x = roll();
    return deck, x;
}

function playeronego (){
    for(i=0; i<deck.length; i++){
        if(x>deck && position<26){
            position++
        }
        else(playertwogo())
    }
}

function playertwogo (){
    for(i=0; i<deck.length; i++){
        if(x>deck && position<26){
            position++
        }
        else(playeronego())
    }
}

function game () {
    startgame()
    playeronego()
}

console.log(game())


//junk code:
    // //console.log(deck)
    // for (i = 0; i < deck.length; i++){
    //     //console.log(deck[i].Value)
    //     if (deck[i].Value == 'A' || deck[i].Value == '2' || deck[i].Value == '6' || deck[i].Value == '7'){
    //         if (i<2 || i>26){
    //             let deck = shuffle();
    //             console.log("reshuffled")
    //             isval();
    //         } 
    //     }
    // }
    // return deck;