//$(document).ready(function(){
//    $("form#qst").submit(function(event){
//    event.preventDefault();
//    var que1=parseInt($("input:radio[name=query1]:checked").val());
//    var que2=parseInt($("input:radio[name=query2]:checked").val());
//    var que3=parseInt($("input:radio[name=query3]:checked").val());
//    var que4=parseInt($("input:radio[name=query4]:checked").val());
//        var que5=parseInt($("input:radio[name=query5]:checked").val());
//       var total =(que1 + que2 + que3 + que4);
//        var percentage=((total/40)*100);
//        $("#tot").text("you have scored:" + percentage + "%");
////    document.getElementById('tot').innerHTML="Score is" + total;
////    alert(total);
//    });
//    
//});

var questions=[{
    "question":"who are you?",
    "option1":"Mwai",
     "option2":"Mooddo",
     "option3":"Maish",
     "option4":"Mongai",
    "answer":"2"
},
              
{
    "question":"who are you?",
    "option1":"Mwai",
     "option2":"Mooddo",
     "option3":"Maish",
     "option4":"Mongai",
    "answer":"2"
},
{
                   
   "question":"who are you?",
    "option1":"Mwai",
     "option2":"Mooddo",
     "option3":"Maish",
     "option4":"Mongai",
    "answer":"2"
},
{
    "question":"who are you?",
    "option1":"Mwai",
     "option2":"Mooddo",
     "option3":"Maish",
     "option4":"Mongai",
    "answer":"2"
},
{
    "question":"who are you?",
    "option1":"Mwai",
     "option2":"Mooddo",
     "option3":"Maish",
     "option4":"Mongai",
    "answer":"2"
}
];
var  curentQuestion=0;
var score=0;
var totQuestions=questions.length;
var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');
function loadQuestion(questionIndex){
    var q=questions[questionIndex];
    
    questionEl.textContent=(questionIndex+1) + '.' + q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
    
};
function loadNextQuestion(){
    var selectOption=document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select your answer');
        return;
    }
    var answer=selectedOption.value;
    if(questions[currentQuestion].answer==answer){
        score+=10;
    }
    selectedOption.checked=false;
    curentQuestion ++;
    if(currentQuestion=totQuestions -1){
        nextButton.textContent='finish';
    }
    if(currentQuestion=totQuestions){
        container.style.display='none';
        resultCont.style.display='';
        resultContont.textContent='Your score;' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
 loadQuestion(loadNextQuestion);

