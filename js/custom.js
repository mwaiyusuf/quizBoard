$(document).ready(function(){
    $("form#qst").submit(function(event){
    event.preventDefault();
        alert("Works");
    var que1=parseInt($("input:radio[name=query1]:checked").val());
    var que2=parseInt($("input:radio[name=query2]:checked").val());
    var que3=parseInt($("input:radio[name=query3]:checked").val());
    var que4=parseInt($("input:radio[name=query4]:checked").val());
       var total = que1 + que2 + que3 + que4;
//    document.getElementById('tot').innerHTML="Score is" + total;
    alert(total);
    });
    
});