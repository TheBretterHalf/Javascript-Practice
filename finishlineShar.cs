using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Finish_Line
{
    // possible classes
    // Die X
    // Deck X
    // Card X
    // Player X
    // Marker X
    // FLMarker /
    // Game or Board

    public class Die
    {
        // sides value color
        public int val;
        private int sides;
        public int color;

        public Die(int sides, int color)
        {
            this.sides = sides;
            this.color = color;
            this.val = 1;
        }

        public Die(int sides)
        {
            this.sides = sides;
            this.val = 1;
        }

        public Die()
        {
            this.sides = 6;
            this.val = 1;
        }

        public void Roll(Random rand)
        {
            this.val = rand.Next(1, this.sides + 1);
        }
    }

    public class Card
    {
        public int suit;
        public int val;

        private Dictionary<int, string> SUIT_MAP = new Dictionary<int, string>
        {
            {0, "\u2663"},
            {1, "\u2660"},
            {2, "\u2665"},
            {3, "\u2666"}
        };

        private Dictionary<int, string> VAL_MAP = new Dictionary<int, string>
        {
            {1, "Ac"},
            {10, "10"},
            {11, "Ja"},
            {12, "Qu"},
            {13, "Ki"}
        };

        public Card(int val, int suit)
        {
            this.val = val;
            this.suit = suit;
        }

        public string Display()
        {
            if (this.val == 0)
            {
                return "Jkr";
            }

            if (this.VAL_MAP.ContainsKey(this.val))
            {
                return this.SUIT_MAP[this.suit] + this.VAL_MAP[this.val];
            }

            return this.SUIT_MAP[this.suit] + "0" + this.val;

        }

    }

    public class Deck
    {
        public List<Card> cards = new List<Card>();

        public Deck(int[] values, int[] suits, int numJokers)
        {
            foreach (var suit in suits)
            {
                foreach (var val in values)
                {
                    this.cards.Add(new Card(val, suit));
                }
            }

            for (int jkr = 0; jkr < numJokers; jkr++)
            {
                this.cards.Add(new Card(0, 0));
            }
        }

        public void Shuffle(Random rand)
        {
            for (int index = this.cards.Count - 1; index > 0; index--)
            {
                int position = rand.Next(index + 1);
                Card temp = this.cards[index];
                this.cards[index] = this.cards[position];
                this.cards[position] = temp;
            }
        }
    }

    public class Marker
    {
        public int position;
        public string name;


        public Marker(string name)
        {
            this.position = -1;
            this.name = name;
        }

        public virtual void Move(int spaces)
        {
            this.position += spaces;
        }
    }

    public class FLMarker : Marker
    {
        public bool stopped;

        public FLMarker(string name) : base(name)
        {
            this.stopped = false;
        }

        public void Move(int spaces, int stopValue, Deck gameDeck)
        {
            for (int count = 1; count <= spaces; count++)
            {
                if (this.position + count >= gameDeck.cards.Count)
                {
                    return;
                }
                if (gameDeck.cards[this.position + count].val >= stopValue)
                {
                    Move(count);
                    return;
                }
            }

            // preprocessing
            this.Move(spaces);
            // postprocess
        }
    }

    public class Player
    {
        public FLMarker[] markers;
        public string name;

        public Player(string name, string[] markerNames)
        {
            this.markers = new FLMarker[markerNames.Length];
            this.name = name;
            for (int markerName = 0; markerName < markerNames.Length; markerName++)
            {
                this.markers[markerName] = new FLMarker(markerNames[markerName]);
            }
        }

        public string HasMarkersAt(int position)
        {
            string master = "";
            foreach (var marker in this.markers)
            {
                if (marker.position == position)
                {
                    master += marker.name;
                }
                else
                {
                    master += " ";
                }
            }

            return master;
        }

        public int FindMarker(string query)
        {
            for (int counter = 0; counter < this.markers.Length; counter++)
            {
                if (markers[counter].name == query)
                {
                    return counter;
                }
            }

            return -1;
        }
    }

    public class FinishLine
    {
        private readonly int[] SUITS = new int[] { 0, 1, 2, 3 };
        private readonly int[] VALUES = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
        private static int NUM_JOKERS = 2;
        private readonly string[] MARKER_NAMES = new string[] { "A", "B", "C" };
        private readonly int[] RESTRICTED_VALUES = new int[] { 0, 1, 2, 11, 12, 13 };
        public Deck deck;
        public Die redDie;
        public Die blackDie;
        public Player player1;
        public int numPlayers;
        public Player[] players;
        public Random rand;

        public FinishLine(int numPlayers, string[] playerNames)
        {
            this.numPlayers = numPlayers;
            this.players = new Player[numPlayers];
            for (int counter = 0; counter < numPlayers; counter++)
            {
                this.players[counter] = new Player(playerNames[counter], MARKER_NAMES);
            }
            //this.player1 = new Player(player1Name, this.MARKER_NAMES);
            this.rand = new Random();
            this.deck = new Deck(this.VALUES, this.SUITS, NUM_JOKERS);
            this.redDie = new Die(6, 0xFF0000);
            this.blackDie = new Die(6, 0x000000);
            this.deck.Shuffle(rand);
            ValidateDeck();
            this.redDie.Roll(rand);
            this.blackDie.Roll(rand);
        }

        private void initializePlayerRow(string[] playerRow)
        {
            for (int count = 0; count < this.numPlayers; count++)
            {
                playerRow[count] = "\t";
            }
        }

        public void DisplayBoard()
        {
            // how to display
            // \t[SVV]\t[SVV] [SVV] [SVV]
            // \t_MMM_\t_MMM



            // ABC
            // AB
            // BC
            // C
            // A C

            Console.Clear();
            string master = "";
            string cardRow = "\t";
            string[] playerRow = new string[this.numPlayers];
            playerRow[0] = "\t";

            foreach (var player in players)
            {
                cardRow += player.name + "\t";
                playerRow[0] += player.HasMarkersAt(-1) + "\t";
            }
            //cardRow += "Player1";
            //
            //playerRow += this.player1.HasMarkersAt(-1);

            master += cardRow + "\n" + playerRow[0] + "\n\n";
            cardRow = "\t";
            initializePlayerRow(playerRow);
            //go thru board
            int counter = 0;
            foreach (Card card in this.deck.cards)
            {
                cardRow += "|" + card.Display() + "|";
                for (var count = 0; count < this.numPlayers; count++)
                {
                    playerRow[count] += " " + this.players[count].HasMarkersAt(counter) + " ";
                }
                //playerRow += " " + this.player1.HasMarkersAt(counter) + " ";
                counter++;
                if (counter % 9 == 0)
                {
                    master += cardRow + "\n";
                    for (int count = 0; count < this.numPlayers; count++)
                    {
                        master += playerRow[count] + "\n";
                    }
                    master += "\n";
                    cardRow = "\t";
                    initializePlayerRow(playerRow);
                }
                else
                {
                    cardRow += "\t";
                    for (var count = 0; count < this.numPlayers; count++)
                    {
                        playerRow[count] += " " + this.players[count].HasMarkersAt(counter) + " ";
                    }
                    //playerRow += "\t";
                }
            }

            Console.WriteLine(master);
        }

        public void ValidateCard(int position)
        {
            if (Array.IndexOf(RESTRICTED_VALUES, this.deck.cards[position].val) >= 0)
            {
                while (true)
                {
                    int newPosition = this.rand.Next(3, 51);
                    if (Array.IndexOf(RESTRICTED_VALUES, this.deck.cards[newPosition].val) >= 0)
                    {
                        continue;
                    }

                    Card temp = this.deck.cards[position];
                    this.deck.cards[position] = this.deck.cards[newPosition];
                    this.deck.cards[newPosition] = temp;
                    break;
                }
            }
        }

        public void ValidateDeck()
        {
            int[] RESTRICTED_POSITIONS = new int[] { 0, 1, 2, 51, 52, 53 };
            foreach (int position in RESTRICTED_POSITIONS)
            {
                ValidateCard(position);
            }

        }
        public void Turn(Player player)
        {
            DisplayBoard();
            string master = "";
            master += player.name + "'s turn!\n";
            this.redDie.Roll(this.rand);
            this.blackDie.Roll(this.rand);
            int stopValue = this.redDie.val + this.blackDie.val;
            master += "Red: " + this.redDie.val + "\tBlack: " + this.blackDie.val + "\tStopValue: " + stopValue + "\n";
            GetMarker("Red", redDie, player, stopValue, master);
            GetMarker("Black", blackDie, player, stopValue, master);

            //if (player.HasMarkersAt(53) == "ABC")
            //{
            //    Console.WriteLine("You Win");
            //}
        }
        public void GetMarker(string dieName, Die die, Player player, int stopValue, string master)
        {
            Console.WriteLine(master);
            Console.WriteLine("Choose marker (A,B,C) for {0} Die", dieName);
            string input = Console.ReadLine();
            int inputIndex = player.FindMarker(input.ToUpper());
            player.markers[inputIndex].Move(die.val, stopValue, this.deck);
            DisplayBoard();
        }



        public Player Round()
        {
            //todo: loop through players
            foreach (var player in players)
            {
                Turn(player);
                if (DidWin(player))
                    return player;
            }
            //Turn(player1);
            //if (DidWin(player1))
            //{
            //    return player1;
            //}
            return null;
            ////didWin(player)
            //return null;
        }

        public void PlayGame()
        {
            while (true)
            {
                Player winner = Round();
                if (Round() != null)
                {
                    Console.WriteLine("Congrats {0}! You win!", winner.name);
                }

                //break;
            }
        }

        private bool DidWin(Player player)
        {
            return player.HasMarkersAt(53) == "ABC";
        }
    }

    class MainClass
    {
        public static void Main(string[] args)
        {
            var game = new FinishLine(2, new string[] { "Cliff", "Joe" });
            game.PlayGame();
        }
    }

    //public class Program
    //{
    //    public static void Main()
    //    {
    //        var game = new FinishLine(1, "player1");
    //        game.DisplayBoard();
    //        game.player1.markers[0].Move(10, 10, game.deck);
    //        game.DisplayBoard();
    //    }
    //}

}