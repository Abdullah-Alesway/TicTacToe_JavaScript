// Variables
var squares = document.getElementsByClassName('cell');
var player = 'X';
var resetBtn = document.getElementsByClassName('reset')[0];
var winnerplayer = document.getElementsByClassName('winner')[0];
var turn = document.getElementsByClassName('turn')[0];

// Function to start the game
for(i = 0; i < squares.length; i++) 
{
    squares[i].onclick = function() 
    {
        if(this.innerHTML !== 'X' && this.innerHTML !== 'O')
        {
            if (player === 'X') 
            {
                this.innerHTML = 'X';
                player = 'O';
                displayturn();
            } 
            else 
            {
                this.innerHTML = 'O';
                player = 'X';
                displayturn();
            }
            winner();
            displaydraw();
        }
    }
}

// Function to check the winner
function winner() 
{
    if(squares[0].innerHTML !== '' && squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML) 
    {
        displaywinder(squares[0].innerHTML);
        boardrest();
    } 
    else if(squares[3].innerHTML !== '' && squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML) 
    {
        displaywinder(squares[3].innerHTML);
        boardrest();
    } 
    else if(squares[6].innerHTML !== '' && squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML) 
    {
        displaywinder(squares[6].innerHTML)
        boardrest();
    } 
    else if(squares[0].innerHTML !== '' && squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML) 
    {
        displaywinder(squares[0].innerHTML);
        boardrest();
    } 
    else if(squares[1].innerHTML !== '' && squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML) 
    {
        displaywinder(squares[1].innerHTML);
        boardrest();
    } 
    else if(squares[2].innerHTML !== '' && squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML) 
    {
        displaywinder(squares[2].innerHTML);
        boardrest();
    } 
    else if(squares[0].innerHTML !== '' && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML) 
    {
        displaywinder(squares[0].innerHTML);
        boardrest();
    } 
    else if(squares[2].innerHTML !== '' && squares[2].innerHTML === squares[4].innerHTML && squares[2].innerHTML === squares[6].innerHTML) 
    {
        displaywinder(squares[2].innerHTML);
        boardrest();
    }
}

// Function to board reset
function boardrest() 
{
    for(i = 0; i < squares.length; i++) 
    {
        squares[i].innerHTML = '';
    }
    player = 'X';
}

// Function to board reset and clear the turn
function boardrestturn() 
{
    boardrest();
    turn.innerHTML = '';
}

// Button to reset the game
resetBtn.onclick = function() 
{
    boardrestturn();
}

// Function to display the winner
function displaywinder(winner)
{
    winnerplayer.innerHTML = 'Player ' + winner + ' wins!';
}

// Function to display who's turn it is
function displayturn()
{
    turn.innerHTML = 'Player ' + player + ' turn';
}

// Function to check if there is a draw
function isDraw() 
{
    for (var i = 0; i < squares.length; i++) 
    {
      if (squares[i].innerHTML === '') 
      {
        return false;
      }
    }
    return true;
}
// Function to display draw
function displaydraw()
{
    if(isDraw() === true)
    {
        winnerplayer.innerHTML = 'Draw!';
    }
}