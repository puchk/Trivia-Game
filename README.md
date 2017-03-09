## HW - {Trivia-Game}

### Live Link
 - https://puchk.github.io/Trivia-Game/

### Instructions/Requirements
 - You'll create a trivia form with multiple choice or true/false options (your choice).
 - The player will have a limited amount of time to finish the quiz. 
 - The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
 - Don't let the player pick more than one answer per question.
 - Don't forget to include a countdown timer.

### Technologies Used
  - Jquery for Dom Manipulation
  - Bootstrap for page layout

### Code Example of the Timer
function timer(i) {
	document.getElementById("countdown").innerHTML = i;
    num = setInterval(function () {
        if (i>0){
        	i--;
        }else {
        	clearInterval(num);
        	checkAnswer();
        }
        document.getElementById("countdown").innerHTML = i;
    }, 1000);
}
