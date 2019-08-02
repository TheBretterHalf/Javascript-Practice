//input as multidimensional array

//error checking
//if o>x
//if two winners
//if still playing

function tictactoe(board)
{   
    let countx =0;
    let counto =0;
    for(let i =0; i<3; i++)
    {
        if(countx==3)
        {
            console.log("X wins");
        }
        if(counto==3)
        {
            console.log("O wins");
        }
        else{
            
            //keep j const
            let j=0;
            if(board[i][j]=='x')
            {
                countx++
            }
            if(board[i][j]=='o')
            {
                counto++
            }
        }
    }
    for(let j=0; j<3; j++)
    {
        if(countx==3)
        {
            console.log("X wins");
        }
        if(counto==3)
        {
            console.log("O wins");
        }
        else{
            let i=0;
            let countx=0;
            let counto=0;
            if(board[i][j]=='x')
            {
                countx++
            }
            if(board[i][j]=='o')
            {
                counto++
            }
        }
    }
    let countdiagn = 0;
    for(let i=0; i<2; i++)
    {
        j=i
        if(countdiagn==2)
        {
            console.log(board[1][1]+ "wins")
        }
        if(board[i][j]==board[i+1][j+1])
        {
            countdiagn++
        }
        else
        {
            break;
        }
    }
    for(let j=0; j<2; j++)
    {
        let i = 2;
        if(countdiagn==2)
        {
            console.log(board[1][1]+ " won")
        }
        if(board[i][j]==board[i-1][j+1])
        {
            countdiagn++
        }
        else
        {
            break;
        }
    }
}

board = [['x','o','o'],['o','x',' '],[' ',' ','x']];

console.log(tictactoe(board));