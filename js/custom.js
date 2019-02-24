//$(document).ready(function() 
//                  {
//  $("#toggle").click(function() {
//    $(".form-showing").toggle();
//    $(".form-hidden").toggle();
//  });
//});
//var dob = $("#born").val();
function submitButton(){
     var que1=parseInt($("input:radio[name=query1]:checked").value);
    var que2=parseInt($("input:radio[name=query2]:checked").value);
    var que3=parseInt($("input:radio[name=query3]:checked").value);
    var que4=parseInt($("input:radio[name=query4]:checked").value);
        var que5=parseInt($("input:radio[name=query5]:checked").value);
       var total =(que1 + que2 + que3 + que4);
        var percentage=((total/40)*100);
        $("#tot").text("you have scored:" + percentage + "%");
};
//$(document).ready(function(){
//    $("#hel").submit(function(event){
//    event.preventDefault();
//    var que1=parseInt($("input:radio[name=query1]:checked").value);
//    var que2=parseInt($("input:radio[name=query2]:checked").value);
//    var que3=parseInt($("input:radio[name=query3]:checked").value);
//    var que4=parseInt($("input:radio[name=query4]:checked").value);
//        var que5=parseInt($("input:radio[name=query5]:checked").value);
//       var total =(que1 + que2 + que3 + que4);
//        var percentage=((total/40)*100);
//        $("#tot").text("you have scored:" + percentage + "%");
////    document.getElementById('tot').innerHTML="Score is" + total;
////    alert(total);
//    });
//    
//});

//var questions=[{
//    "question":"who are you?",
//    "option1":"Mwai",
//     "option2":"Mooddo",
//     "option3":"Maish",
//     "option4":"Mongai",
//    "answer":"2"
//},
//              
//{
//    "question":"who am i?",
//    "option1":"Mwai1",
//     "option2":"Mooddo",
//     "option3":"Maish",
//     "option4":"Mongai",
//    "answer":"2"
//},
//{
//                   
//   "question":"who are you?",
//    "option1":"Mwai",
//     "option2":"Mooddo",
//     "option3":"Maish",
//     "option4":"Mongai",
//    "answer":"2"
//},
//{
//    "question":"who are you?",
//    "option1":"Mwai",
//     "option2":"Mooddo",
//     "option3":"Maish",
//     "option4":"Mongai",
//    "answer":"2"
//},
//{
//    "question":"who are you?",
//    "option1":"Mwai",
//     "option2":"Mooddo",
//     "option3":"Maish",
//     "option4":"Mongai",
//    "answer":"2"
//}
//];
//
//var score=0;
//var totQuestions=questions.length;
//var container=document.getElementById('quizContainer');
//var questionEl=document.getElementById('question');
//var opt1=document.getElementById('opt1');
//var opt2=document.getElementById('opt2');
//var opt3=document.getElementById('opt3');
//var opt4=document.getElementById('opt4');
//var nextButton=document.getElementById('nextButton');
//var resultCont=document.getElementById('result');
//questions.forEach(function LoadNextQuestion(question){
////    alert(question.question);
////                   var query=questions[i];         
//         questionEl.textContent=(question.question);
//        opt1.textContent=question.option1;
//        opt2.textContent=question.option2;
//       opt3.textContent=question.option3;
//       opt4.textContent=question.option4;
//});
////function loadQuestion(){
////    var q=questions[0];
////    
////    questionEl.textContent=(q.question);
////    opt1.textContent=q.option1;
////    opt2.textContent=q.option2;
////    opt3.textContent=q.option3;
////    opt4.textContent=q.option4;
////    
////};
////loadQuestion();
////$(document).ready(function(){
////$(".next-btn").onclick(function(){
////    $(".questoin").prepend().forEach(questions)
////});
////});
//
// 
//function LoadNextQuestion(){
//   for(j=0;j<=questions.length;j++){
//       
//        var query=questions[j];
//                            
//         questionEl.textContent=(query.question);
//       opt1.textContent=query.option1;
//    opt2.textContent=query.option2;
//   opt3.textContent=query.option3;
//   opt4.textContent=query.option4;
//       
//       
//    }
//    
//  
//       
////        questionEl.textContent=(query.question);
////    opt1.textContent=query.option1;
////    opt2.textContent=query.option2;
////    opt3.textContent=query.option3;
////    opt4.textContent=query.option4;
////        
// 
//    
//    
//}
//
////function loadNextQuestion(event){
////    event.preventDefault;
////    var selectOption=document.querySelector('input[type=radio]:checked');
////    if(!selectedOption){
////        alert('please select your answer');
////        return;
////    }
////    var answer=selectedOption.value;
////    if(questions[currentQuestion].answer==answer){
////        score+=10;
////    }
////    selectedOption.checked=false;
////    curentQuestion ++;
////    if(currentQuestion=totQuestions -1){
////        nextButton.textContent='finish';
////    }
////    if(currentQuestion=totQuestions){
////        container.style.display='none';
////        resultCont.style.display='';
////        resultContont.textContent='Your score;' + score;
////        return;
////    }
////    loadQuestion(currentQuestion);
////}
//// loadQuestion(loadNextQuestion);
//
