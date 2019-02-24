// $(document).ready(function(){
//   $("#Toggle").click(function(){
//     $(".form-showing").Toggle();
//     $(".form-hidden").toggle();
//   });
// });
$(document).ready(function(){
  $("form#register").submit(function(event){
    var firstName = $("#first-name").val();
    var secondName=$("#second-name").val();
  });
});
var answ=["javascript library", "Content Delivery Network", ".fadeIn()", "specifying multiple functions and/or selectors to an element", "Asynchronous Javascript and XM"];
var score=0;
$("form .quest").submit(function(event){
var query1=$("input:radio[name=query1]:checked").val();
var query2=$("input:radio[name=query2]:checked").val();
var query3=$("input:radio[name=query3]:checked").val();
var query4=$("input:radio[name=query4]:checked").val();
var query5=$("input:radio[name=query5]:checked").val();
});
if(query1===answ[0]){
  score+=1;
}
else{
  score+=0;
}
if(query2==answ[1]){
  score+=1
}
else{
  score+=0;
}
if(query3==answ[2]){
  score+=1
}
else{
  score+=0;
}
if(query4==answ[3]){
  score+=1
}
else{
  score+=0;
}
if(query5==answ[4]){
  score+=1
}
else{
  score+=0;
}
var parcentage=score/5*100;
alert(parcentage);
// $("#tot").text(score + " /5 " + parcentage);
