var yourScore;
  var wins = 0;
  var losses = 0;
  document.querySelector("#yourScore").innerHTML = 0;
  var targetScore = Math.floor((Math.random()*101)+19);
  console.log(targetScore);
  document.querySelector("#targetScore").innerHTML = targetScore;
  var gemValues = [1, 10, 20, 5];
  var gemOne = gemValues[0];
  var gemTwo = gemValues[1];
  var gemThree = gemValues[2];
  var gemFour = gemValues[3];
  console.log(gemValues);
   
  var html =  
    "<h3>Wins: " + wins + "</h3>" +
    "<h3>Losses: " + losses + "</h3>";
  document.querySelector("#winsLosses").innerHTML = html;

function gameOver () {
	gemValues = []
    while(gemValues.length < 4){
      var randomnumber = Math.ceil(Math.random()*12);
      if(gemValues.indexOf(randomnumber) > -1) continue;
      gemValues[gemValues.length] = randomnumber;  
      gemOne = gemValues[0];
      gemTwo = gemValues[1];
      gemThree = gemValues[2];
      gemFour = gemValues[3];
      console.log(gemValues);
    }
    targetScore = Math.floor((Math.random()*101)+19);
    console.log(targetScore);
    document.querySelector("#targetScore").innerHTML = targetScore;
    yourScore = 0;
    var html =  
    "<h3>Wins: " + wins + "</h3>" +
    "<h3>Losses: " + losses + "</h3>";
  document.querySelector("#winsLosses").innerHTML = html;
}

//click h1 to start and set/reset game (target score and crystal values)
$("h1").click(function() {
   wins = 0;
   losses = 0;
   gameOver();
 });

var yourScore = 0;

$("#gemOne").click(function() {
 document.querySelector("#yourScore").innerHTML = (yourScore += gemOne);
 if (yourScore === targetScore) {
	 wins++;
	 yourScore = 0;
	 document.querySelector("#yourScore").innerHTML = 0;
	 gameOver();
}
if (yourScore >= targetScore) {
     losses++;
     yourScore = 0;
     document.querySelector("#yourScore").innerHTML = 0;
     gameOver();
   }
});
$("#gemTwo").click(function() {
 document.querySelector("#yourScore").innerHTML = (yourScore += gemTwo);
  if (yourScore === targetScore) {
	 wins++;
	 yourScore = 0;
	 document.querySelector("#yourScore").innerHTML = 0;
	 gameOver();
}
if (yourScore >= targetScore) {
     losses++;
     yourScore = 0;
     document.querySelector("#yourScore").innerHTML = 0;
     gameOver();
   }
});
$("#gemThree").click(function() {
 document.querySelector("#yourScore").innerHTML = (yourScore += gemThree);
  if (yourScore === targetScore) {
	 wins++;
	 yourScore = 0;
	 document.querySelector("#yourScore").innerHTML = 0;
	 gameOver();
}
if (yourScore >= targetScore) {
     losses++;
     yourScore = 0;
     document.querySelector("#yourScore").innerHTML = 0;
     gameOver();
   }
});
$("#gemFour").click(function() {
 document.querySelector("#yourScore").innerHTML = (yourScore += gemFour);
 if (yourScore === targetScore) {
	 wins++;
	 yourScore = 0;
	 document.querySelector("#yourScore").innerHTML = 0;
	 gameOver();
}
if (yourScore >= targetScore) {
     losses++;
     yourScore = 0;
     document.querySelector("#yourScore").innerHTML = 0;
     gameOver();
   }
});


//computer assigns target score from 19 to 120
// var targetScore = Math.floor((Math.random()*101)+19);
// console.log(targetScore);
// document.querySelector("#targetScore").innerHTML = targetScore;

// //computer assigns value to gems from 1 to 12
// var gemValues = []
// while(gemValues.length < 4){
//     var randomnumber = Math.ceil(Math.random()*12);
//     if(gemValues.indexOf(randomnumber) > -1) continue;
//     gemValues[gemValues.length] = randomnumber;
// }

// console.log(gemValues);
// var gemOne = gemValues[0];
// var gemTwo = gemValues[1];
// var gemThree = gemValues[2];
// var gemFour = gemValues[3];

// //user clicks on a gem gem value is added to user score
//var yourScore =  0;


//if user score is equal to target score one is added to wins
//if user score is greater than target score one is added to losses
//if the user score >= target score the game resets
//when the game resets the computer picks a new target score, the user score is reset to zero and the gems are assigned new values






