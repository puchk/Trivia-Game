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
	timer(30);
	for (i=0; i<quizQuestions.length; i++) {
		$("#trivia").append("<div id='questionAndChoices"+i+"'></div>");
		$("#questionAndChoices"+i).append("<div id='question"+i+"'>"+quizQuestions[i].question+"</div><br>");
		$("#question"+i).after("<div id='choices"+i+"'></div>");
		for (j=0;j<quizQuestions[i].choices.length;j++){
			$("#choices"+i).append("<input type='radio' id='choice"+i+j+"' name='choice"+i+"' data-value='"+quizQuestions[i].choices[j]+"'>"+quizQuestions[i].choices[j]+" ");
		}
	}
}
function checkAnswer(){
	$("#submitButton").hide();
	for (var i=0; i<quizQuestions.length; i++){
		if ($("input[name='choice"+i+"']:checked").data("value") === quizQuestions[i].answer){
			counter++;
			// $("#endGeameText").html(counter + " correct.");
			$("#questionAndChoices"+i).css("background", "rgb(162,218,165)");
		}
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
	clearInterval(num);
	checkAnswer();
});