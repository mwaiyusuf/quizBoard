$(document).ready(function(){
  $("button#leggo").click(function (){
    $(".cop").slideUp()
    $(".pers").show();

    $("button#regy").click(function (){
      $(".pers").hide()
      $(".details").show();

      var nameInput =$("input#name").val();
      var phoneInput = $("input#phone").val();
      var emailInput = $("input#email").val();

      $(".name").text(nameInput);
      $(".phone").text(phoneInput);
      $(".email").text(emailInput);

      event.preventDefault();
    })
  });

  $("button#start").click(function(){
    $(".details").hide()
    $("#quizjay").show()
    $("#jquiz").show()
    $(".ques").show();

  })
  $("button#nextQue1").click(function(){
    $(".ques").hide()
    $(".cdn").show();
  });

  $("button#nextQue2").click(function(){
    $(".cdn").hide()
    $(".effects").show();
  });

  $("button#nextQue3").click(function(){
    $(".effects").hide()
    $(".chain").show();
  });

  $("button#nextQue4").click(function(){
    $(".chain").hide()
    $(".ajax").show();
  });

  $("button#sub").click(function(){
    $(".ajax").hide()
    $("#result").show()
    $("#score").show()
    $("#image").show()
    $("#last").show();
  });

  $("button#sub").click(function(event){
    event.preventDefault();
    var score=0;
    var quesOne = parseInt($("input[name='que1']:checked").val());
    var quesTwo = parseInt($("input[name='quest2']:checked").val());
    var quesThree = parseInt($("input[name='quest3']:checked").val());
    var quesFour = parseInt($("input[name='quest4']:checked").val());
    var quesFive = parseInt($("input[name='quest5']:checked").val());
    var total = (quesOne + quesTwo + quesThree + quesFour + quesFive);

    var percentage = (total/25)*100;

    if(percentage >= 70 ){
      document.getElementById("result").innerHTML="You got " + percentage + "%";
      document.getElementById("score").innerHTML="Excellent.<br> Great Job!"

    }
    else if(percentage >= 50){
      document.getElementById("result").innerHTML="You got " + percentage + "%";
      document.getElementById("score").innerHTML="Very Good <br> keep it up!."

    }
    else{
      document.getElementById("result").innerHTML="You got " + percentage + "%";
      document.getElementById("score").innerHTML="Not well done,you have tried but you need to retake please. ."

    }

  })

  $("#last").click(function(){
    $("#result").hide()
    $("#score").hide()
    $("#last").hide()
    $("#image").hide()
    $("#quizjay").hide()
    $("#jquiz").hide()
    $(".cop").show();
  })

});
