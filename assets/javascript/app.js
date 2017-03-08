var quizQuestions = [{
	question: "Which animal can produce the loudest sound?",
	answer: "Blue Whales",
	choices: ["Blue Whales", "Lions", "Elephants", "Grizzly Bears"]
},{
	question: "Which animal lays the biggest eggs?",
	answer: "Whale Sharks",
	choices: ["Ostriches", "Crocodiles", "Whale Sharks", "Kangaroos"]
},{
	question: "How many stomachs does a cow have?",
	answer: 4,
	choices: [1, 2, 3, 4]
},{
	question: "What is the only bird that can fly backwards?",
	answer: "Hummingbird",
	choices: ["Eagle", "Falcon", "Hummingbird", "Parrot"]
},{
	question: "What is the fastest land animal?",
	answer: "Cheetah",
	choices: ["Cheetah", "Antelope", "Horse", "Wildebeest"]
}];

var counter = 0;
var num;

function timer(i) {
    num = setInterval(function () {
        document.getElementById("countdown").innerHTML = i;
        if (i>0){
        	i--;
        }
        else {
        	clearInterval(num);
        	checkAnswer();
        }
    }, 1000);
}
function startGame(){
	$("#playButton").hide();
	$(".display").show();
	// Set timer in seconds
	timer(30);
	for (i=0; i<quizQuestions.length; i++) {
		// Create a div for each question
		$("#trivia").append("<div id='questionAndChoices"+i+"'></div>");
		// Place each question in their own div
		$("#questionAndChoices"+i).append("<div id='question"+i+"'>"+quizQuestions[i].question+"</div><br>");
		// Append the question's choices to it as radio buttons
		$("#question"+i).after("<div id='choices"+i+"'></div>");
		for (j=0;j<quizQuestions[i].choices.length;j++){
			// Give them a unique id, shared name, and a data value equal to its choice for each radio button
			$("#choices"+i).append("<input type='radio' id='choice"+i+j+"' name='choice"+i+"' data-value='"+quizQuestions[i].choices[j]+"'>"+quizQuestions[i].choices[j]+" ");
		}
	}
}
// When the timer runs out or the submit button is clicked
function checkAnswer(){
	$("#submitButton").hide();
	for (var i=0; i<quizQuestions.length; i++){
		// Look at checked buttons data to check answers
		// Check answers by seeing if the data-value (which is the button choice) equals answer
		// If correct, update correct counter and change question background to green
		if ($("input[name='choice"+i+"']:checked").data("value") === quizQuestions[i].answer){
			counter++;
			$("#questionAndChoices"+i).css("background", "rgb(162,218,165)");
		}
		// If wrong, change question background to red
		else {
			$("#questionAndChoices"+i).css("background", "rgb(224,141,141)");
		}
		$("#endGameText").html(counter + "/"+quizQuestions.length+" correct");
	}
}
$("#playButton").on("click", function(){
	startGame();
});

$("#submitButton").on("click", function(){
	// Freeze timer
	clearInterval(num);
	checkAnswer();
});