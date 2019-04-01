
document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;




function user () {
  var userChoice = this.id;
//   console.log("User: " + userChoice)
document.getElementById("yourPick").innerHTML = `${userChoice}`; 
  var compChoice = Math.floor((Math.random() * 3) + 1);
  if (compChoice == 1)
   compChoice = 'rock';
  else if (compChoice == 2)
    compChoice = 'paper';
  else
    compChoice = 'scissors'
    document.getElementById("compPick").innerHTML = `${compChoice}`;
    var a = userChoice;
    var b = compChoice;
    if ((a == 'paper' && b == 'rock') || (a == 'rock' && b == 'scissors') || (a == 'scissors' && b == 'paper'))
      (result = 'win') && (tally = 1);
    else if ((a == 'rock' && b == 'paper') || (a == 'scissors' && b == 'rock') || (a == 'paper' && b == 'scissors'))
      (result = 'loss') && (tally = -1);
    else 
      (result = 'tie') && (tally = 0);
      document.getElementById("wonOrLost").innerHTML = `${result}`;
    //   document.getElementById("winTally").innerHTML += tally
}



// user selects rock paper scissors

// computer randomly chooses rock paper scissors


// display the user and computer choice on screen

// display who won


// BONUSES

    // keep track of wins & losses
    // use images to make a choice
    // start a new game w/o refresh
    // track % of wins and losses
    // color a win diff than a loss 