var turn = 0;
var moves = 0;

function cellClick(cell)
{   
    if(!cell.classList.contains("used"))
    {
        moves++;
        var turnImagePath = "";
        if(turn === 0){
            turnImagePath = "url('images/o.png')";
            turn = 1;
            cell.classList.remove(cell.classList.item(1));
            cell.classList.add("O");
        }
        else if(turn === 1)
        {
            turnImagePath = "url('images/x.jpg')";
            turn = 0;
            cell.classList.remove(cell.classList.item(1));
            cell.classList.add("X");
        }
        
        cell.style.backgroundImage = turnImagePath;
        cell.classList.add("used");
        
        if((document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellTwo").classList.item(1) &&
          document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellThree").classList.item(1))
          || 
          (document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellFour").classList.item(1) &&
          document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellSeven").classList.item(1))
          || 
          (document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellFive").classList.item(1) &&
          document.getElementById("cellOne").classList.item(1) === 
          document.getElementById("cellNine").classList.item(1))
          || 
          (document.getElementById("cellTwo").classList.item(1) === 
          document.getElementById("cellFive").classList.item(1) &&
          document.getElementById("cellTwo").classList.item(1) === 
          document.getElementById("cellEight").classList.item(1))
          || 
          (document.getElementById("cellThree").classList.item(1) === 
          document.getElementById("cellSix").classList.item(1) &&
          document.getElementById("cellThree").classList.item(1) === 
          document.getElementById("cellNine").classList.item(1))
          || 
          (document.getElementById("cellThree").classList.item(1) === 
          document.getElementById("cellFive").classList.item(1) &&
          document.getElementById("cellThree").classList.item(1) === 
          document.getElementById("cellSeven").classList.item(1))
          || 
          (document.getElementById("cellFour").classList.item(1) === 
          document.getElementById("cellFive").classList.item(1) &&
          document.getElementById("cellFour").classList.item(1) === 
          document.getElementById("cellSix").classList.item(1))
          || 
          (document.getElementById("cellSeven").classList.item(1) === 
          document.getElementById("cellEight").classList.item(1) &&
          document.getElementById("cellSeven").classList.item(1) === 
          document.getElementById("cellNine").classList.item(1))
          )
        {
            alert("Player: " + ((turn === 0) ? "X" : "O") + " wins!");
            restartGame();
        }
    }
    
    if(moves === 9)
    {
        alert("Nobody wins");
        restartGame();
    }
}

function restartGame()
{
    alert("The game will be restarted!");
    var temp = document.getElementsByClassName("cell");
    for(var i = 0; i < temp.length; i++)
    {
        temp[i].style.backgroundImage = "";
        temp[i].classList.remove(temp[i].classList.item(2));
        temp[i].classList.remove(temp[i].classList.item(1));
        temp[i].classList.add("slot" + i);
    }
}