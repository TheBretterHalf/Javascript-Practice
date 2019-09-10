using System;

//possible classes:
//Die
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
}

//where program is being run, or rather main function space think C
public class Program
{
    public static void Main()
    {
        Die redDie = new Die(6, 0xFF0000);
        //var tells the compiler what data type it should be at compilation
        var blackDie = newDie();
        Die bigDie = new Die(100);

        Console.WriteLine("redDie: " + redDie.val)
        Console.WriteLine("blackDie: " + blackDie.val)
        Console.WriteLine("bigDie: " + bigDie.val)
    }
}