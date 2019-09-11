using System;
using System.Collections.Generic;

//possible classes:
//Die   x
//Deck
//Card
//Player
//Marker
//Game or Board

public class Die
{
    //sides value color
    //defining attributes, public can be accessed outside class and private can only be accessed within the method
    public int val;
    private int sides;
    public int color;
    public Die(int sides, int color)
    //constructor is the name of the function with parameters
    {
        //assiging the class values to the inputs
        this.sides = sides;
        this.color = color;
        this.val = 1;
    }
    //due to polymorphism you can base the function run due to the number of parameters that you are sending through the function
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
    public int val;
    public int suit;
    private Dictionary<int, string> suitMap = new Dictionary<int, string> {
        {0, "\u2663"},
        {1, "\u2660"},
        {2, "\u2665"},
        {3, "\u2666"}
    };
    private Dictionary<int, string> valMap = new Dictionary<int, string>{
        {1, "Ac"},
        {10, "10"},
        {11, "Ja"},
        {12, "Qu"},
        {13, "Ki"}
    };
    //methods are identified by capitol letters
    public string Display()
    {
        if (this.val == 0)
        {
            return "Jkr";
        }

        if (this.valMap.ContainsKey(this.val))
        {
            return this.suitMap[this.suit] + this.valMap[this.val];
        }

        return this.suitMap[this.suit] + "0" + this.val;
    }

    public Card(int val, int suit)
    {
        this.val = val;
        this.suit = suit;

    }

}

//where program is being run, or rather main function space think C
public class Program
{
    public static void Main()
    {
        Die redDie = new Die(6, 0xFF0000);

        //var tells the compiler what data type it should be at compilation
        var blackDie = new Die(6, 0x000000);
        var rand = new Random();

        // Console.WriteLine("redDie: " + redDie.val);
        // Console.WriteLine("blackDie: " + blackDie.val);
        // Console.WriteLine("bigDie: " + bigDie.val);

        // redDie.Roll(rand);
        // blackDie.Roll(rand);
        // bigDie.Roll(rand);

        // Console.WriteLine("AftertheRoll");
        // Console.WriteLine("redDie: " + redDie.val);
        // Console.WriteLine("blackDie: " + blackDie.val);
        // Console.WriteLine("bigDie: " + bigDie.val);

        Card aCard = new Card(11, 0);
        Console.WriteLine("the card is {0}", aCard.Display());
    }
}